const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

navToggle.addEventListener("click", () => {
  const isOpen = navMobile.classList.toggle("nav-mobile-open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Simple scroll-in animation similar to Framer Motion's whileInView
const fadeItems = document.querySelectorAll(".fade-up-on-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-up-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeItems.forEach((item) => observer.observe(item));

// Simple scroll-in animation
const testimonialItems = document.querySelectorAll(".fade-up-on-scroll");

const testimonialObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-up-visible");
        testimonialObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

testimonialItems.forEach((item) => testimonialObserver.observe(item));
