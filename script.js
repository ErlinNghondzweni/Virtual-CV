document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".page");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Run once on load
});
