// import 'ldrs/ring';

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
// Script to move section from bottion to top animation 
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal-section").forEach(section => {
    gsap.fromTo(section,
      { opacity: 0, y: 100 }, // Start Position
      {
        opacity: 1, y: 0, // End Position
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // Starts animation when 80% of the section is in view
          toggleActions: "play none none none"
        }
      }
    );
  });
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
// open menu on right side
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

// Open Menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
});

// Close Menu
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("translate-x-full");
});
// JavaScript for Sticky Navbar & Mobile Menu 

// Sticky Navbar on Scroll
window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow-lg");
    navbar.classList.remove("bg-transparent");
    navbar.querySelectorAll("a").forEach(link => {
      link.classList.add("text-black");
      link.classList.remove("text-white");
    });
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-white", "shadow-lg");
    navbar.querySelectorAll("a").forEach(link => {
      link.classList.add("text-white");
      link.classList.remove("text-black");
    });
  }
});

// Mobile Menu Toggle
document.getElementById("menu-btn").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.remove("translate-x-full");
});

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.add("translate-x-full");
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
// education section image animation
gsap.from("#eduImage", {
  opacity: 0,
  x: 100, // Starts from right
  duration: 1,
  ease: "power2.out"
});

// skills section animation
function animateSkills() {
  const counters = document.querySelectorAll('.percentage');
  const circles = document.querySelectorAll('.progress-circle');

  counters.forEach((counter, index) => {
    let target = parseInt(counter.getAttribute('data-target'));

    // Animate Percentage Number
    gsap.to(counter, {
      innerText: target,
      duration: 2,
      snap: { innerText: 1 },
      ease: "power2.out",
      onUpdate: function () {
        counter.innerText = Math.round(counter.innerText) + "%";
      }
    });

    // Animate Progress Circle
    let circle = circles[index];
    let circumference = 502; // Adjusted for 178px width/height
    gsap.to(circle, {
      strokeDasharray: `${(target / 100) * circumference}, 502`,
      duration: 2,
      ease: "power2.out"
    });
  });
}

// Run animation on window load
window.onload = animateSkills;

// Pricing Section animation
document.querySelectorAll('.price-box').forEach(box => {
  box.addEventListener('mouseenter', () => {
    gsap.to(box, { y: -10, duration: 0.3, ease: "power1.out" });
  });
  box.addEventListener('mouseleave', () => {
    gsap.to(box, { y: 0, duration: 0.3, ease: "power1.out" });
  });
});
// add button animation
// Select all buttons with the class "animated-btn"
document.querySelectorAll(".animated-btn").forEach(button => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, { scale: 1.1, duration: 0.3, ease: "power2.out" });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
});
// back to top 
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Navbar active section behavior
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function changeActiveSection() {
  let scrollPosition = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("text-lime-500");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("text-lime-500");
        }
      });
    }
  });
}

window.addEventListener("scroll", changeActiveSection);
// submit form scrip
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const jsonData = Object.fromEntries(formData.entries());

  fetch("https://script.google.com/macros/s/AKfycbxXAuTQHhpYOS85_JrrGtjBUnfPXMGR9OEEKN4S5FXExQXLp3fZeO59OXk_2qVWbDRs/exec", { 
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jsonData),
  })
  .then(response => response.json())  // Convert response to JSON
  .then(data => {
    if (data.status === "success") {
      alert("✅ Form submitted successfully!");
      document.getElementById("contact-form").reset();
    } else {
      alert("❌ Error: " + data.message);
    }
  })
  .catch(error => alert("❌ Error submitting form! " + error));
});
