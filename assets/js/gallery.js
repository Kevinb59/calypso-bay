
document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  let currentRoom = '';
  let currentIndex = 0;

  thumbnails.forEach(img => {
    img.addEventListener('click', () => {
      currentRoom = img.dataset.room;
      currentIndex = parseInt(img.dataset.index);
      showLightbox();
    });
  });

  function showLightbox() {
    lightboxImg.src = `images/gallery/fulls/${currentRoom}/${currentIndex + 1}.jpg`;
    lightbox.style.display = 'flex';
  }

  window.closeLightbox = function () {
    lightbox.style.display = 'none';
  };

  window.nextImage = function () {
    currentIndex++;
    const nextPath = `images/gallery/fulls/${currentRoom}/${currentIndex + 1}.jpg`;
    fetch(nextPath, { method: 'HEAD' })
      .then(res => {
        if (res.ok) lightboxImg.src = nextPath;
        else currentIndex--; // stop if image doesn't exist
      });
  };

  window.prevImage = function () {
    if (currentIndex === 0) return;
    currentIndex--;
    lightboxImg.src = `images/gallery/fulls/${currentRoom}/${currentIndex + 1}.jpg`;
  };

  // Swipe mobile
  let startX = 0;
  lightbox.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  lightbox.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) window.nextImage();
    else if (endX - startX > 50) window.prevImage();
  });

  // Click to close
  lightboxImg.addEventListener('click', window.closeLightbox);
});
