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

  /* ===== Rotating text (smooth) ===== */
  const words = ["우리가 함께", "당신이", "내가", "다같이"];
  let index = 0;
  const target = document.getElementById("rotate-text");

  const changeWord = () => {
    target.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % words.length;
      target.textContent = words[index];
      target.classList.remove("fade-out");
      target.classList.add("fade-in");
    }, 600);

    setTimeout(() => {
      target.classList.remove("fade-in");
    }, 1400);
  };

  setTimeout(() => {
    changeWord();
    setInterval(changeWord, 3200);
  }, 1800);
});
