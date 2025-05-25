// Sticky header background on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 60){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('nav ul.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Fade-in sections on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Review slider
const reviews = document.querySelectorAll('.review');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let currentReview = 0;

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentReview = (currentReview === 0) ? reviews.length - 1 : currentReview - 1;
  showReview(currentReview);
});

nextBtn.addEventListener('click', () => {
  currentReview = (currentReview === reviews.length - 1) ? 0 : currentReview + 1;
  showReview(currentReview);
});

// Initialize first review active
showReview(currentReview);

// Car Details button alert
document.querySelectorAll('.btn-secondary').forEach(button => {
  button.addEventListener('click', () => {
    alert(`More details for ${button.dataset.car} coming soon!`);
  });
});

// Contact form submit (demo)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  contactForm.reset();
});
