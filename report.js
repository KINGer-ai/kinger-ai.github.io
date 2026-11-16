(function () {
  const root = document.documentElement;
  const body = document.body;
  const themeButton = document.querySelector("#theme-toggle");
  const themeLabel = document.querySelector("#theme-label");
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const barRows = [...document.querySelectorAll(".bar-row")];
  const barChart = document.querySelector("#bar-chart");
  const questionnaire = document.querySelector("#native-questionnaire");
  const formStatus = document.querySelector("#form-status");

  function safeRead(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function safeWrite(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      return;
    }
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === "dark";
    themeLabel.textContent = "Switch theme";
    themeButton.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    themeButton.setAttribute("aria-pressed", String(dark));
    document.querySelector('meta[name="theme-color"]').setAttribute("content", dark ? "#171814" : "#eeecea");
    safeWrite("ads401-museum-theme", theme);
  }

  function setFilter(filter) {
    filterButtons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    barRows.forEach((row) => {
      row.hidden = filter !== "all" && row.dataset.direction !== filter;
    });

    barChart.classList.remove("is-ready");
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => barChart.classList.add("is-ready"));
    });
  }

  const savedTheme = safeRead("ads401-museum-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme || (prefersDark ? "dark" : "light"));

  themeButton.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
  });

  if (questionnaire) {
    questionnaire.addEventListener("submit", (event) => {
      event.preventDefault();
      questionnaire.classList.add("was-validated");
      questionnaire.querySelectorAll("input").forEach((input) => input.removeAttribute("aria-invalid"));

      if (!questionnaire.checkValidity()) {
        const invalid = [...questionnaire.querySelectorAll("input")].find((input) => !input.validity.valid);
        if (invalid) {
          invalid.setAttribute("aria-invalid", "true");
          invalid.focus();
        }
        formStatus.textContent = "Complete all required items before checking the questionnaire.";
        return;
      }

      formStatus.textContent =
        "Questionnaire complete: all required items are answered. This report copy does not submit data.";
    });
  }

  window.requestAnimationFrame(() => {
    body.classList.add("is-loaded");
    window.setTimeout(() => barChart.classList.add("is-ready"), 120);
  });
})();
