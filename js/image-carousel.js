const jobs = [
    { src: 'images/jobs/working.jpg', transition: 'fade' },
    { transition: 'wait' },
    { src: 'images/jobs/driveway.jpg', transition: 'fade' },
    { transition: 'wait' },
    { src: 'images/jobs/walkway-before.jpg', transition: 'fade' },
    { src: 'images/jobs/walkway-after.jpg', transition: 'wipe' },
    { transition: 'wait' },
    { src: 'images/jobs/solar-before.jpg', transition: 'fade' },
    { src: 'images/jobs/solar-after.jpg', transition: 'wipe' },
    { transition: 'wait' },
    { src: 'images/jobs/roof-before.jpg', transition: 'fade' },
    { src: 'images/jobs/roof-after.jpg', transition: 'wipe' },
    { transition: 'wait' },
    { src: 'images/jobs/rooftile-before.jpg', transition: 'fade' },
    { src: 'images/jobs/rooftile-after.jpg', transition: 'wipe' },
    { transition: 'wait' },
    { src: 'images/jobs/fence-before.jpg', transition: 'fade' },
    { src: 'images/jobs/fence-after.jpg', transition: 'wipe' },
    { transition: 'wait' },
    { src: 'images/jobs/gutter-before.jpg', transition: 'fade' },
    { src: 'images/jobs/gutter-after.jpg', transition: 'wipe' },
    { transition: 'wait' },
    { src: 'images/jobs/solar-panels.jpg', transition: 'fade' },
    { transition: 'wait' }
  ];

  let index = 0;
  const sectionElement  = document.getElementById('section-carousel');
  const cover   = sectionElement.querySelector('.cover');
  const topImage  = sectionElement.querySelector('.top');
  const bottomImage  = sectionElement.querySelector('.bottom');
  const FADE_DURATION = 1000; // ms
  const WIPE_DURATION = 1000; // ms
  const DISPLAY_DURATION = 3000; // ms

  function showNextPhoto() {
    const { src, transition } = jobs[index];
    let selectedDelay = 0;
    if (transition === 'fade') {
      selectedDelay = FADE_DURATION;
    } else if (transition === 'wipe') {
      selectedDelay = WIPE_DURATION;
    }
    setTimeout(() => {
      if (transition === 'fade') {
        fadeTo(src, { duration: FADE_DURATION });
      } else if (transition === 'wipe') {
        wipeTo(src, { duration: WIPE_DURATION });
      }
      index = (index + 1) % jobs.length;
    }, DISPLAY_DURATION);

    // Schedule next photo
    setTimeout(showNextPhoto, DISPLAY_DURATION + selectedDelay);
  }

  function preloadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  }

  async function wipeTo(nextSrc, opts = {}) {
    const { duration = 800 } = opts;

    await preloadImage(nextSrc);
    bottomImage.src = nextSrc;

    cover.style.setProperty('--dur', duration + 'ms');
    cover.classList.add('animate-wipe');

    const onEnd = () => {
      cover.classList.remove('animate-wipe');
      topImage.src = bottomImage.src;     // top now equals the revealed image
      cover.style.width = '100%';  // reset cover for the next wipe
      cover.removeEventListener('animationend', onEnd);
    };
    cover.addEventListener('animationend', onEnd);
  }

  async function fadeTo(nextSrc, opts = {}) {
    const { duration = 800 } = opts;

    await preloadImage(nextSrc);
    bottomImage.src = nextSrc;

    cover.style.setProperty('--dur', duration + 'ms');
    cover.classList.add('animate-fade');

    const onEnd = () => {
      cover.classList.remove('animate-fade');
      topImage.src = bottomImage.src;     // top now equals the revealed image
      cover.style.opacity = '1';  // reset cover for the next wipe
      cover.removeEventListener('animationend', onEnd);
    };
    cover.addEventListener('animationend', onEnd);
  }

  // Start slideshow after initial delay
  showNextPhoto();
