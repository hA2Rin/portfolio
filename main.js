document.addEventListener("DOMContentLoaded", () => {
  /* ===== Section reveal ===== */
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach(section => observer.observe(section));

  /* ===== Contact 강제 표시 ===== */
  const contact = document.getElementById("contact");
  if (contact) {
    contact.classList.add("show");
  }

  /* ===== Rotating text ===== */
  const words = ["우리가 함께", "당신이", "내가", "다같이"];
  let index = 0;
  const target = document.getElementById("rotate-text");

  if (target) {
    setInterval(() => {
      target.classList.add("fade-out");

      setTimeout(() => {
        index = (index + 1) % words.length;
        target.textContent = words[index];
        target.classList.remove("fade-out");
        target.classList.add("fade-in");
      }, 500);

      setTimeout(() => {
        target.classList.remove("fade-in");
      }, 1000);
    }, 2600);
  }
});
