document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.gallery .image');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCounter = document.getElementById('lightbox-counter');

  let currentRoom = '';
  let currentIndex = 0;
  let totalImages = 99; // valeur max arbitraire, sera déterminée dynamiquement

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      currentRoom = link.dataset.room;
      currentIndex = 0;
      detectTotalImages(currentRoom).then(() => {
        showLightbox();
      });
    });
  });

  function formatIndex(index) {
    return (index + 1).toString().padStart(2, '0');
  }

  function updateCounter() {
    lightboxCounter.textContent = `Photo ${currentIndex + 1} / ${totalImages}`;
  }

  function showLightbox() {
    const path = `images/gallery/fulls/${currentRoom}/${formatIndex(currentIndex)}.jpg`;
    lightboxImg.src = path;
    updateCounter();
    lightbox.style.display = 'flex';
    lightbox.style.opacity = '1';
    lightbox.style.position = 'fixed';
    lightbox.style.zIndex = '9999';
  }

  window.closeLightbox = function () {
    lightbox.style.display = 'none';
  };

  window.nextImage = function () {
    if (currentIndex + 1 >= totalImages) return;
    currentIndex++;
    const nextPath = `images/gallery/fulls/${currentRoom}/${formatIndex(currentIndex)}.jpg`;
    lightboxImg.src = nextPath;
    updateCounter();
  };

  window.prevImage = function () {
    if (currentIndex === 0) return;
    currentIndex--;
    const prevPath = `images/gallery/fulls/${currentRoom}/${formatIndex(currentIndex)}.jpg`;
    lightboxImg.src = prevPath;
    updateCounter();
  };

  function detectTotalImages(room) {
    // On teste de 01 à 99, puis on s’arrête au premier fichier manquant
    return new Promise(resolve => {
      let i = 1;
      function testNext() {
        const path = `images/gallery/fulls/${room}/${i.toString().padStart(2, '0')}.jpg`;
        fetch(path, { method: 'HEAD' })
          .then(res => {
            if (res.ok) {
              i++;
              testNext();
            } else {
              totalImages = i - 1;
              resolve();
            }
          })
          .catch(() => {
            totalImages = i - 1;
            resolve();
          });
      }
      testNext();
    });
  }

  // Swipe mobile
  let startX = 0;
  lightbox.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  lightbox.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextImage();
    else if (endX - startX > 50) prevImage();
  });

  lightboxImg.addEventListener('click', closeLightbox);
});
