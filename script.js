// -----------------------
// MODAL FUNCTIONALITY
// -----------------------

const requestModal = document.getElementById('request-modal');
const cartModal = document.getElementById('cart-modal');
const cancelBtn = document.getElementById('cancel-btn');
const submitBtn = document.getElementById('submit-btn');
const backBtn = document.getElementById('back-btn');
const requestBtn = document.querySelector('.request-btn');
const cartBtn = document.querySelector('#cart-btn');

// Function to toggle body scroll
function toggleBodyScroll(isModalOpen) {
  document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
}

// Open Request Dish Modal
if (requestBtn) {
  requestBtn.addEventListener('click', () => {
    requestModal.style.display = 'flex';
    toggleBodyScroll(true);
  });
}

// Close Request Dish Modal
if (cancelBtn) {
  cancelBtn.addEventListener('click', () => {
    requestModal.style.display = 'none';
    toggleBodyScroll(false);
  });
}
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    requestModal.style.display = 'none';
    toggleBodyScroll(false);
  });
}

// Open Cart Modal
if (cartBtn) {
  cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'flex';
    toggleBodyScroll(true);
  });
}

// Close Cart Modal
if (backBtn) {
  backBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
    toggleBodyScroll(false);
  });
}

// Close Modal on clicking outside the content
window.addEventListener('click', (event) => {
  if (event.target === requestModal) {
    requestModal.style.display = 'none';
    toggleBodyScroll(false);
  }
  if (event.target === cartModal) {
    cartModal.style.display = 'none';
    toggleBodyScroll(false);
  }
});

// -----------------------
// SLIDER FUNCTIONALITY
// -----------------------

const track = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let currentIndex = 0;

// Ensure slider works if elements exist
if (track && prevBtn && nextBtn) {
  const slideWidth = document.querySelector('.slide').offsetWidth + 20; // Slide width + gap
  const visibleSlides = 3; // Number of visible slides

  function moveSlider(index) {
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  // Move to Next Slide
  nextBtn.addEventListener('click', () => {
    if (currentIndex < track.children.length - visibleSlides) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to start
    }
    moveSlider(currentIndex);
  });

  // Move to Previous Slide
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = track.children.length - visibleSlides; // Loop to end
    }
    moveSlider(currentIndex);
  });

  // Adjust Slider on Resize
  window.addEventListener('resize', () => {
    moveSlider(currentIndex);
  });
}


// -----------------------
// WINDOW RESIZE HANDLER
// -----------------------
window.addEventListener('resize', () => {
  if (track) {
    const slideWidth = document.querySelector('.slide').offsetWidth + 20;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});

// -----------------------
// VIDEO SECTION
//------------------------

// Video Play Button Functionality
const video = document.getElementById('promo-video');
const playButton = document.querySelector('.play-button');

if (playButton && video) {
    // Toggle play/pause using the play button
    playButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none';
        } else {
            video.pause();
            playButton.style.display = 'flex';
        }
    });

    // Hide play button when the video starts playing
    video.addEventListener('play', () => {
        playButton.style.display = 'none';
    });

    // Show play button when the video is paused
    video.addEventListener('pause', () => {
        playButton.style.display = 'flex';
    });

    // Show play button when the video ends
    video.addEventListener('ended', () => {
        playButton.style.display = 'flex';
    });
}


