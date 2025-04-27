const photos = [
    "images/india/flowers.jpg",
    "images/india/grad.jpg",
    "images/india/toddler.jpg",
    "images/india/wall.jpg",
    "images/india/pink-headband.jpg",
    "images/india/reclining.jpg",
    "images/india/pink-door.jpg",
    "images/india/airplane.jpg"
  ];
  let index = 0;
  const img = document.getElementById('heroImage');
  const FADE_DURATION = 500; // ms
  const DISPLAY_DURATION = 5000; // ms

  function showNextPhoto() {
    // Fade out
    img.classList.remove('hide', 'fade-in');
    img.classList.add('fade-out');
    setTimeout(() => {
      // Change image source after fade out
      index = (index + 1) % photos.length;
      img.src = photos[index];
      // Fade in
      img.classList.add('hide');
      img.classList.remove('fade-out');
      img.classList.add('fade-in');
    }, FADE_DURATION);

    // Schedule next photo
    setTimeout(showNextPhoto, DISPLAY_DURATION + FADE_DURATION);
  }

  // Preload images for smooth transitions
  for (const src of photos) {
    const preload = new Image();
    preload.src = src;
  }

  // Start slideshow after initial delay
  setTimeout(showNextPhoto, DISPLAY_DURATION);