// Fade-in on scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-show");
      }
    });
  },
  { threshold: 0.25 }
);

document.querySelectorAll(".fade-section").forEach(el => {
  observer.observe(el);
});


// ---------------- NAVBAR SCROLL ----------------
function goToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  // Close mobile menu after click
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu) {
    mobileMenu.classList.remove("show");
  }
}

// ---------------- MOBILE MENU ----------------
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("show");
}

// ---------------- FOOTER YEAR ----------------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------------- COUNTER ANIMATION ----------------
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = +el.getAttribute("data-target");
      let count = 0;
      const speed = target / 150;

      const update = () => {
        count += speed;
        if (count < target) {
          el.innerText = Math.floor(count).toLocaleString();
          requestAnimationFrame(update);
        } else {
          el.innerText = target.toLocaleString();
        }
      };

      update();
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.6 });

counters.forEach(c => counterObserver.observe(c));



