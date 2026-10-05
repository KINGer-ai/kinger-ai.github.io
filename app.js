(function () {
  const data = window.PROJECT_DATA;
  const storageKey = "group-research-site-draft-v1";
  let isEditing = false;
  let toastTimer;

  function text(path, fallback) {
    const parts = path.split(".");
    let value = data;

    for (const part of parts) {
      value = value?.[part];
    }

    return value ?? fallback ?? "";
  }

  function setText(element, value, path) {
    element.textContent = value;
    element.dataset.path = path;
    updatePlaceholderState(element);
  }

  function updatePlaceholderState(element) {
    const hasPlaceholder = /【[^】]+】/.test(element.textContent);
    element.classList.toggle("is-placeholder", hasPlaceholder);
  }

  function renderScalarContent() {
    document.querySelectorAll("[data-content]").forEach((element) => {
      const path = element.dataset.content;
      const value = text(path, element.textContent.trim());
      setText(element, value, path);
    });
  }

  function renderSnapshot() {
    const container = document.querySelector("#snapshot-list");
    container.replaceChildren();

    data.snapshot.forEach((item, index) => {
      const row = document.createElement("div");
      const term = document.createElement("dt");
      const description = document.createElement("dd");

      term.textContent = item.label;
      setText(description, item.value, `snapshot.${index}.value`);
      row.append(term, description);
      container.append(row);
    });
  }

  function renderHypotheses() {
    const container = document.querySelector("#hypothesis-list");
    container.replaceChildren();

    data.questions.forEach((item, index) => {
      const article = document.createElement("article");
      article.className = "hypothesis-card";

      const top = document.createElement("div");
      top.className = "hypothesis-card__top";

      const badge = document.createElement("span");
      badge.className = "hypothesis-id";
      badge.textContent = item.id;

      const status = document.createElement("span");
      status.className = "status-pill";
      status.textContent = "待确认";

      const question = document.createElement("h3");
      setText(question, item.question, `questions.${index}.question`);

      const hypothesis = document.createElement("p");
      setText(hypothesis, item.hypothesis, `questions.${index}.hypothesis`);

      const rationale = document.createElement("p");
      setText(rationale, item.rationale, `questions.${index}.rationale`);

      top.append(badge, status);
      article.append(top, question, hypothesis, rationale);
      container.append(article);
    });
  }

  function renderConditions() {
    const container = document.querySelector("#condition-rows");
    container.replaceChildren();

    data.conditions.forEach((item, index) => {
      const row = document.createElement("tr");
      const code = document.createElement("td");
      const name = document.createElement("td");
      const manipulation = document.createElement("td");
      const purpose = document.createElement("td");
      const plannedN = document.createElement("td");

      code.className = "condition-code";
      code.textContent = item.code;
      setText(name, item.name, `conditions.${index}.name`);
      setText(manipulation, item.manipulation, `conditions.${index}.manipulation`);
      setText(purpose, item.purpose, `conditions.${index}.purpose`);
      setText(plannedN, item.plannedN, `conditions.${index}.plannedN`);

      row.append(code, name, manipulation, purpose, plannedN);
      container.append(row);
    });
  }

  function renderProcedure() {
    const container = document.querySelector("#procedure-list");
    container.replaceChildren();

    data.procedure.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.className = "procedure-item";

      const step = document.createElement("span");
      step.className = "procedure-step";
      step.textContent = item.step;

      const copy = document.createElement("div");
      const title = document.createElement("h3");
      const detail = document.createElement("p");

      setText(title, item.title, `procedure.${index}.title`);
      setText(detail, item.detail, `procedure.${index}.detail`);
      copy.append(title, detail);

      const time = document.createElement("span");
      time.className = "procedure-time";
      setText(time, item.time, `procedure.${index}.time`);

      listItem.append(step, copy, time);
      container.append(listItem);
    });
  }

  function renderMeasures() {
    const container = document.querySelector("#measure-grid");
    container.replaceChildren();

    data.measures.forEach((item, index) => {
      const card = document.createElement("article");
      card.className = "measure-card";

      const type = document.createElement("span");
      type.className = "measure-card__type";
      type.textContent = item.type;

      const body = document.createElement("div");
      const title = document.createElement("h3");
      const list = document.createElement("dl");

      setText(title, item.construct, `measures.${index}.construct`);

      const fields = [
        ["操作化", item.operationalization, `measures.${index}.operationalization`],
        ["质量指标", item.reliability, `measures.${index}.reliability`],
        ["测量时点", item.timing, `measures.${index}.timing`]
      ];

      fields.forEach(([labelText, value, path]) => {
        const row = document.createElement("div");
        const term = document.createElement("dt");
        const description = document.createElement("dd");

        term.textContent = labelText;
        setText(description, value, path);
        row.append(term, description);
        list.append(row);
      });

      body.append(title, list);
      card.append(type, body);
      container.append(card);
    });
  }

  function renderAnalysis() {
    const container = document.querySelector("#analysis-pipeline");
    container.replaceChildren();

    data.analysis.forEach((item, index) => {
      const article = document.createElement("article");
      article.className = "analysis-step";

      const number = document.createElement("span");
      number.className = "analysis-step__number";
      number.textContent = item.phase;

      const title = document.createElement("h3");
      setText(title, item.title, `analysis.${index}.title`);

      const list = document.createElement("ul");

      item.details.forEach((detail, detailIndex) => {
        const listItem = document.createElement("li");
        setText(listItem, detail, `analysis.${index}.details.${detailIndex}`);
        list.append(listItem);
      });

      article.append(number, title, list);
      container.append(article);
    });
  }

  function renderTimeline() {
    const container = document.querySelector("#timeline-list");
    container.replaceChildren();

    data.timeline.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.className = "timeline-item";

      const time = document.createElement("time");
      time.textContent = item.date;

      const title = document.createElement("h3");
      setText(title, item.title, `timeline.${index}.title`);

      const detail = document.createElement("p");
      setText(detail, item.detail, `timeline.${index}.detail`);

      const owner = document.createElement("span");
      owner.className = "timeline-owner";
      setText(owner, item.owner, `timeline.${index}.owner`);

      listItem.append(time, title, detail, owner);
      container.append(listItem);
    });
  }

  function renderTeam() {
    const container = document.querySelector("#team-list");
    container.replaceChildren();

    data.team.forEach((item, index) => {
      const row = document.createElement("div");
      const role = document.createElement("strong");
      const person = document.createElement("span");
      const duties = document.createElement("p");

      setText(role, item.role, `team.${index}.role`);
      setText(person, item.person, `team.${index}.person`);
      setText(duties, item.duties, `team.${index}.duties`);

      row.append(role, person, duties);
      container.append(row);
    });
  }

  function renderDecisions() {
    const container = document.querySelector("#decision-list");
    container.replaceChildren();

    data.decisions.forEach((item, index) => {
      const listItem = document.createElement("li");
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      const copy = document.createElement("span");

      checkbox.type = "checkbox";
      checkbox.dataset.decisionIndex = String(index);
      setText(copy, item, `decisions.${index}`);

      label.append(checkbox, copy);
      listItem.append(label);
      container.append(listItem);
    });
  }

  function renderAll() {
    renderScalarContent();
    renderSnapshot();
    renderHypotheses();
    renderConditions();
    renderProcedure();
    renderMeasures();
    renderAnalysis();
    renderTimeline();
    renderTeam();
    renderDecisions();
    restoreDraft();
  }

  function getValueAtPath(target, path) {
    return path.split(".").reduce((value, part) => value?.[part], target);
  }

  function setValueAtPath(target, path, value) {
    const parts = path.split(".");
    const last = parts.pop();
    const parent = parts.reduce((current, part) => {
      if (current[part] === undefined) {
        current[part] = {};
      }

      return current[part];
    }, target);

    parent[last] = value;
  }

  function collectPageData() {
    const nextData = structuredClone(data);

    document.querySelectorAll("[data-path]").forEach((element) => {
      setValueAtPath(nextData, element.dataset.path, element.textContent.trim());
    });

    nextData.meta.updated = new Date().toISOString().slice(0, 10);
    return nextData;
  }

  function getSavedState() {
    const saved = window.localStorage.getItem(storageKey);

    if (!saved) {
      return null;
    }

    try {
      return JSON.parse(saved);
    } catch {
      return null;
    }
  }

  function applySavedContent(saved) {
    document.querySelectorAll("[data-path]").forEach((element) => {
      const savedValue = getValueAtPath(saved.content, element.dataset.path);

      if (typeof savedValue === "string") {
        setText(element, savedValue, element.dataset.path);
      }
    });

    Object.entries(saved.decisions ?? {}).forEach(([index, checked]) => {
      const checkbox = document.querySelector(`[data-decision-index="${index}"]`);

      if (checkbox) {
        checkbox.checked = Boolean(checked);
      }
    });

    setSaveState(`本机草稿 · ${saved.savedAt}`);
  }

  function restoreDraft() {
    const saved = getSavedState();

    if (saved?.content) {
      applySavedContent(saved);
    }
  }

  function saveDraft(showConfirmation) {
    const content = collectPageData();
    const decisions = {};

    document.querySelectorAll("[data-decision-index]").forEach((checkbox) => {
      decisions[checkbox.dataset.decisionIndex] = checkbox.checked;
    });

    const saved = {
      content,
      decisions,
      savedAt: new Date().toLocaleString("zh-CN", { hour12: false })
    };

    window.localStorage.setItem(storageKey, JSON.stringify(saved));
    setSaveState(`已保存 · ${new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`);

    if (showConfirmation) {
      showToast("草稿已保存在当前浏览器。");
    }
  }

  function setSaveState(message) {
    document.querySelector("#save-state").textContent = message;
  }

  function showToast(message) {
    const toast = document.querySelector("#toast");
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");

    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2200);
  }

  function toggleEditing() {
    isEditing = !isEditing;
    document.body.classList.toggle("is-editing", isEditing);
    document.querySelector("#edit-button").classList.toggle("is-active", isEditing);
    document.querySelector("#edit-button").setAttribute("aria-pressed", String(isEditing));

    document.querySelectorAll("[data-path]").forEach((element) => {
      element.contentEditable = String(isEditing);
      element.spellcheck = false;
    });

    setSaveState(isEditing ? "编辑中 · 尚未保存" : "查看模式");

    if (isEditing) {
      showToast("黄色占位内容可以直接点击修改。");
    } else {
      saveDraft(false);
    }
  }

  function bindEvents() {
    document.querySelector("#edit-button").addEventListener("click", toggleEditing);
    document.querySelector("#save-button").addEventListener("click", () => saveDraft(true));
    document.querySelector("#print-button").addEventListener("click", () => window.print());

    document.addEventListener("input", (event) => {
      if (!event.target.matches('[contenteditable="true"]')) {
        return;
      }

      updatePlaceholderState(event.target);
      setSaveState("编辑中 · 尚未保存");
    });

    document.addEventListener("change", (event) => {
      if (event.target.matches("[data-decision-index]")) {
        setSaveState("清单已更新 · 尚未保存");
      }
    });

    window.addEventListener("beforeprint", () => {
      if (isEditing) {
        toggleEditing();
      }
    });
  }

  renderAll();
  bindEvents();
})();
