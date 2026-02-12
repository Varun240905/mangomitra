/* -----------------------------
   Fade-in Scroll Animation
----------------------------- */
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 40) {
      el.classList.add("show");
    }
  });
});


/* -----------------------------
   Mobile Hamburger Menu Toggle
----------------------------- */
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


/* -----------------------------
   Auto-close Menu After Click (Better UX)
----------------------------- */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
