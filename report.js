(function () {
  const root = document.documentElement;
  const body = document.body;
  const themeButton = document.querySelector("#theme-toggle");
  const themeLabel = document.querySelector("#theme-label");
  const menuButton = document.querySelector("#menu-toggle");
  const siteNav = document.querySelector("#site-nav");
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const barRows = [...document.querySelectorAll(".bar-row")];
  const barChart = document.querySelector("#bar-chart");
  const sections = [...document.querySelectorAll("main > section[id]")];
  const navLinks = [...document.querySelectorAll(".site-nav a")];

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

  function closeMenu() {
    siteNav.classList.remove("is-open");
    body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const open = !siteNav.classList.contains("is-open");
    siteNav.classList.toggle("is-open", open);
    body.classList.toggle("menu-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
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

  function setActiveNav() {
    let activeId = "";

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= 160) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${activeId}`;
      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  const savedTheme = safeRead("ads401-museum-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme || (prefersDark ? "dark" : "light"));

  themeButton.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  menuButton.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1120) {
      closeMenu();
    }
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
  });

  window.addEventListener("scroll", setActiveNav, { passive: true });

  window.requestAnimationFrame(() => {
    body.classList.add("is-loaded");
    window.setTimeout(() => barChart.classList.add("is-ready"), 120);
    setActiveNav();
  });
})();
