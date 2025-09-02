document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.gallery .image')
  const lightbox = document.getElementById('lightbox')
  const lightboxImg = document.getElementById('lightbox-img')
  const lightboxCounter = document.getElementById('lightbox-counter')

  let currentRoom = ''
  let currentIndex = 0
  let totalImages = 99

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      currentRoom = link.dataset.room
      currentIndex = 0
      detectTotalImages(currentRoom).then(() => {
        showLightbox()
      })
    })
  })

  function formatIndex(index) {
    return (index + 1).toString().padStart(2, '0')
  }

  function updateCounter() {
    lightboxCounter.textContent = `Photo ${currentIndex + 1} / ${totalImages}`
  }

  function showLightbox() {
    const path = `images/gallery/fulls/${currentRoom}/${formatIndex(
      currentIndex
    )}.webp`
    lightboxImg.src = path
    updateCounter()
    lightbox.style.display = 'flex'
    lightbox.style.opacity = '1'
    lightbox.style.position = 'fixed'
    lightbox.style.zIndex = '9999'

    // Bloque tous les événements du site sauf lightbox
    document.body.classList.add('no-scroll')
  }

  window.closeLightbox = function () {
    lightbox.style.display = 'none'
    document.body.classList.remove('no-scroll')
  }

  window.nextImage = function () {
    if (currentIndex + 1 >= totalImages) return
    currentIndex++
    const nextPath = `images/gallery/fulls/${currentRoom}/${formatIndex(
      currentIndex
    )}.webp`
    lightboxImg.src = nextPath
    updateCounter()
  }

  window.prevImage = function () {
    if (currentIndex === 0) return
    currentIndex--
    const prevPath = `images/gallery/fulls/${currentRoom}/${formatIndex(
      currentIndex
    )}.webp`
    lightboxImg.src = prevPath
    updateCounter()
  }

  function detectTotalImages(room) {
    return new Promise((resolve) => {
      let i = 1
      function testNext() {
        const path = `images/gallery/fulls/${room}/${i
          .toString()
          .padStart(2, '0')}.webp`
        fetch(path, { method: 'HEAD' })
          .then((res) => {
            if (res.ok) {
              i++
              testNext()
            } else {
              totalImages = i - 1
              resolve()
            }
          })
          .catch(() => {
            totalImages = i - 1
            resolve()
          })
      }
      testNext()
    })
  }

  // Swipe mobile
  let startX = 0
  lightbox.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX
  })
  lightbox.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX
    if (startX - endX > 50) nextImage()
    else if (endX - startX > 50) prevImage()
  })

  lightboxImg.addEventListener('click', (e) => {
    e.stopPropagation()
  })

  lightbox.addEventListener('click', closeLightbox)

  // Event listener pour le bouton de fermeture
  document.querySelector('#lightbox .close').addEventListener('click', (e) => {
    e.stopPropagation()
    closeLightbox()
  })

  // Navigation clavier
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'Escape') closeLightbox()
    }
  })
})

document.querySelectorAll('#lightbox .nav i').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.stopPropagation()
    if (el.classList.contains('fa-chevron-circle-left')) {
      prevImage()
    } else if (el.classList.contains('fa-chevron-circle-right')) {
      nextImage()
    }
  })
})
