document.addEventListener("DOMContentLoaded", () => {

  /* ===== Section 등장 애니메이션 ===== */
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach(s => observer.observe(s));

  /* ===== 사이드바 활성 링크 ===== */
  const navLinks = document.querySelectorAll(".nav-link");

  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach(s => sectionObserver.observe(s));

  /* ===== 히어로 회전 텍스트 ===== */
  const words = ["우리가 함께", "당신이", "내가", "모두 다 같이", "우리가"];
  const target = document.getElementById("rotate-text");
  let idx = 0;

  if (target) {
    target.classList.add("fade-in");

    setInterval(() => {
      target.classList.remove("fade-in");
      target.classList.add("fade-out");

      setTimeout(() => {
        idx = (idx + 1) % words.length;
        target.textContent = words[idx];
        target.classList.remove("fade-out");
        target.classList.add("fade-in");
      }, 500);
    }, 3500);
  }

  /* ===== 모바일 메뉴 ===== */
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
      const isOpen = sidebar.classList.toggle("open");
      menuBtn.classList.toggle("open", isOpen);
      menuBtn.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
    });

    // 링크 클릭 시 모바일 메뉴 닫기
    sidebar.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("open");
        menuBtn.classList.remove("open");
        menuBtn.setAttribute("aria-label", "메뉴 열기");
      });
    });

    // 사이드바 외부 클릭 시 닫기
    document.addEventListener("click", e => {
      if (
        sidebar.classList.contains("open") &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        sidebar.classList.remove("open");
        menuBtn.classList.remove("open");
        menuBtn.setAttribute("aria-label", "메뉴 열기");
      }
    });
  }

});
