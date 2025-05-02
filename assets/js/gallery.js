
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.gallery .image');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  let currentRoom = '';
  let currentIndex = 0;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      currentRoom = link.dataset.room;
      currentIndex = 0;
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
        else currentIndex--;
      });
  };

  window.prevImage = function () {
    if (currentIndex === 0) return;
    currentIndex--;
    lightboxImg.src = `images/gallery/fulls/${currentRoom}/${currentIndex + 1}.jpg`;
  };

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
