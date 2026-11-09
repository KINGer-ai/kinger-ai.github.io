(function () {
  const body = document.body;
  const themeButton = document.querySelector("#theme-toggle");
  const themeLabel = document.querySelector("#theme-label");
  const progressBar = document.querySelector(".progress-bar");
  const sections = [...document.querySelectorAll(".report-section")];
  const navLinks = [...document.querySelectorAll(".toc a")];
  const copySyntaxButton = document.querySelector("#copy-spss-syntax");
  const copySyntaxLabel = document.querySelector("#copy-spss-label");
  const spssSyntax = document.querySelector("#spss-syntax");

  function setTheme(theme) {
    body.dataset.theme = theme;
    themeLabel.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    localStorage.setItem("ads401-report-theme", theme);
  }

  function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? window.scrollY / max : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, value * 100))}%`;
  }

  function updateActiveSection() {
    let current = sections[0]?.id;

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= 150) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${current}`);
    });
  }

  themeButton.addEventListener("click", () => {
    setTheme(body.dataset.theme === "dark" ? "light" : "dark");
  });

  copySyntaxButton?.addEventListener("click", async () => {
    const syntax = spssSyntax?.textContent || "";
    try {
      await navigator.clipboard.writeText(syntax);
      copySyntaxLabel.textContent = "Copied";
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = syntax;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      copySyntaxLabel.textContent = "Copied";
    }

    window.setTimeout(() => {
      copySyntaxLabel.textContent = "Copy code";
    }, 1600);
  });

  window.addEventListener("scroll", () => {
    updateProgress();
    updateActiveSection();
  });

  setTheme(localStorage.getItem("ads401-report-theme") || "light");
  updateProgress();
  updateActiveSection();
})();
