
// Fade in Navbar from top
gsap.from("nav", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out"
});

// Left Hero Section Animations
gsap.from("#hero-left h1", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 0.3,
  ease: "power2.out"
});
gsap.from("#hero-left p", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 0.6,
  ease: "power2.out"
});

// Right Hero Section Animations
gsap.from("#hero-image", {
  opacity: 0,
  x: 50,
  duration: 1,
  delay: 0.3,
  ease: "power2.out"
});
document.addEventListener("DOMContentLoaded", () => {
  // Fade and slide in from the left
  gsap.from("#profile-container", {
    x: -100,         // Move from left
    opacity: 0,      // Fade in from transparent
    duration: 1.2,   // 1.2 seconds for smoothness
    ease: "power3.out"
  });

  // Optional: Add a slight zoom on load
  gsap.from("#profile-image", {
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power2.out"
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.from("#about-image", {
    x: -50,    // Moves image from left (-50px)
    // opacity: 0, // Starts with opacity 0 (hidden)
    duration: 1, // Animation lasts 1 second
    delay: 0.2,  // Small delay for better effect
    ease: "power2.out" // Smooth easing effect
  });
});


// Initializing AOS
AOS.init();

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Typing Animation
// hero section typing animation
const typingAnimationElement = document.getElementById('typing-animation');
const typingTexts = [
  'Software Engineer ',
  'Frappe Developer ',
  'Web Developer'
];
function playTypingAnimation(text) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingAnimationElement.textContent += text[i];
    }, i * 200);
  }
  setTimeout(() => {
    typingAnimationElement.textContent = '';
    const nextIndex = (typingTexts.indexOf(text) + 1) % typingTexts.length;
    playTypingAnimation(typingTexts[nextIndex]);
  }, text.length * 200 + 1000);
}
playTypingAnimation(typingTexts[0]);

// experience section counter

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCounter = () => {
      const increment = target / 50; // Adjust speed

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCounter, 50);
      } else {
        counter.innerText = target; // Ensure exact value
      }
    };

    updateCounter();
  });
});

// Projects Section Js
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    document.querySelectorAll('.card').forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    // Highlight active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Hover effect for popups
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('.popup').style.bottom = '0';
  });
  card.addEventListener('mouseleave', () => {
    card.querySelector('.popup').style.bottom = '-100%';
  });
});
//  for slides js
document.addEventListener("DOMContentLoaded", function () {
  // GSAP Animation for Cards
  gsap.to(".card", { 
    opacity: 1, 
    y: 0, 
    duration: 1, 
    stagger: 0.3, 
    ease: "power3.out" 
  });

  // Auto Image Slider
  function startSlider(sliderId) {
    let index = 0;
    const slides = document.querySelector(`#${sliderId}`).children;
    setInterval(() => {
      index = (index + 1) % slides.length;
      document.querySelector(`#${sliderId}`).style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
  }

  startSlider("flight-slider");
  startSlider("library-slider");
  startSlider("ride-slider");
  startSlider("portfolio-slider");
});
// <!-- Atropos Script -->
{/* <script src="https://unpkg.com/atropos"></script> */}
const myAtropos = Atropos({
  el: '.my-atropos',
  activeOffset: 40,
  shadow: true,
  duration: 300,
});



