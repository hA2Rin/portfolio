document.addEventListener("DOMContentLoaded", () => {

  /* ===== Scroll Reveal ===== */
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.18 }
  );

  sections.forEach(section => observer.observe(section));

  /* ===== Rotating Text ===== */
  const words = ["우리가 함께", "당신이", "내가", "다같이"];
  const target = document.getElementById("rotate-text");
  let index = 0;

  if (!target) return;

  target.classList.add("fade-in");

  const changeText = () => {
    target.classList.remove("fade-in");
    target.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % words.length;
      target.textContent = words[index];

      target.classList.remove("fade-out");
      target.classList.add("fade-in");
    }, 600);
  };

  setInterval(changeText, 3400);
});
