window.PROJECT_DATA = {
  meta: {
    status: "10 月 5 日 · 讨论稿",
    updated: "2026-10-05",
    version: "v0.1"
  },
  project: {
    kicker: "Group Project / Experimental Research Design",
    title: "【请替换】小组实验研究项目标题",
    summary:
      "用一项小规模、可复现的实验，检验【干预方式】如何影响【核心结果】，并进一步说明作用机制与适用边界。",
    brief:
      "本页把研究构想整理成可讨论、可执行的实验方案。黄色字段代表尚未由小组确认的内容，今天需要逐项定稿。"
  },
  snapshot: [
    { label: "研究设计", value: "2 × 2 组间实验" },
    { label: "计划样本", value: "N = 180（待功效分析确认）" },
    { label: "自变量", value: "【条件维度 A】×【条件维度 B】" },
    { label: "主要结果", value: "【核心因变量与指标】" },
    { label: "最终交付", value: "预注册 + 数据集 + 研究海报" }
  ],
  model: {
    iv: "自变量\n【实验操纵】",
    mechanism: "机制变量\n【中介或过程指标】",
    dv: "因变量\n【主要结果】",
    moderator: "边界条件\n【调节变量】"
  },
  questions: [
    {
      id: "RQ1",
      question: "【实验条件】是否会改变【主要结果】？",
      hypothesis: "H1：相对于控制条件，实验条件会显著提高或降低【主要结果】。",
      rationale: "依据：【理论机制或既有证据】。"
    },
    {
      id: "RQ2",
      question: "这一影响通过什么过程发生？",
      hypothesis: "H2：【机制变量】会在实验操纵与【主要结果】之间起中介作用。",
      rationale: "依据：【过程证据或预实验结果】。"
    },
    {
      id: "RQ3",
      question: "在什么条件下，影响更强或更弱？",
      hypothesis: "H3：【调节变量】会调节实验条件对【主要结果】的影响。",
      rationale: "依据：【理论边界与竞争解释】。"
    }
  ],
  conditions: [
    {
      code: "C0",
      name: "控制组",
      manipulation: "标准流程，不含目标操纵",
      purpose: "提供比较基准",
      plannedN: "45 人"
    },
    {
      code: "C1",
      name: "条件 A",
      manipulation: "【操作定义 A】",
      purpose: "检验第一个主效应",
      plannedN: "45 人"
    },
    {
      code: "C2",
      name: "条件 B",
      manipulation: "【操作定义 B】",
      purpose: "检验第二个主效应",
      plannedN: "45 人"
    },
    {
      code: "C3",
      name: "条件 A × B",
      manipulation: "【两个维度的组合操纵】",
      purpose: "检验交互作用",
      plannedN: "45 人"
    }
  ],
  procedure: [
    {
      step: "01",
      title: "招募与知情同意",
      detail: "说明研究目的、自愿参与、匿名处理、退出权与数据用途。",
      time: "3 min"
    },
    {
      step: "02",
      title: "筛选与基线测量",
      detail: "确认纳入标准，测量人口学信息、控制变量与基线水平。",
      time: "4 min"
    },
    {
      step: "03",
      title: "随机分配",
      detail: "使用计算机生成的随机序列分配实验条件，并保存分配记录。",
      time: "1 min"
    },
    {
      step: "04",
      title: "实验操纵",
      detail: "统一呈现材料、时间与交互方式，并记录操纵是否成功。",
      time: "8 min"
    },
    {
      step: "05",
      title: "过程与结果测量",
      detail: "先测量机制变量，再测量主要结果，避免顺序造成额外启动。",
      time: "5 min"
    },
    {
      step: "06",
      title: "操纵检查与复盘",
      detail: "检查参与者是否理解操纵，完成 debriefing 并说明研究目的。",
      time: "4 min"
    }
  ],
  measures: [
    {
      type: "主要结果",
      construct: "【核心因变量】",
      operationalization: "【量表、行为指标或任务成绩】",
      reliability: "报告信度、效度或评分者一致性",
      timing: "实验操纵后"
    },
    {
      type: "机制变量",
      construct: "【中介或过程构念】",
      operationalization: "【采用成熟量表 / 反应时 / 编码指标】",
      reliability: "报告各维度信度与项目数",
      timing: "操纵后、结果前"
    },
    {
      type: "操纵检查",
      construct: "参与者感知到的实验条件",
      operationalization: "【2 至 3 个直接检查题】",
      reliability: "检查组间差异与材料理解",
      timing: "主要结果后"
    },
    {
      type: "控制变量",
      construct: "可能混淆结果的个体差异",
      operationalization: "【先前经验、动机、基本能力等】",
      reliability: "预先说明纳入模型或做随机化检查",
      timing: "基线阶段"
    }
  ],
  analysis: [
    {
      phase: "01",
      title: "数据准备与质量检查",
      details: [
        "按预注册标准处理缺失值、异常值和不合格参与者。",
        "报告样本流失、随机化平衡与变量分布。"
      ]
    },
    {
      phase: "02",
      title: "操纵检查与描述统计",
      details: [
        "验证实验条件确实被参与者感知，且不符合者比例可接受。",
        "报告各条件的均值、标准差、置信区间与相关矩阵。"
      ]
    },
    {
      phase: "03",
      title: "核心假设检验",
      details: [
        "采用 ANOVA 或回归模型检验主效应和交互作用。",
        "在模型中加入预先指定的控制变量，并报告效应量与 95% CI。"
      ]
    },
    {
      phase: "04",
      title: "机制与稳健性分析",
      details: [
        "使用 bootstrap 检验中介效应；用简单斜率分析解释交互。",
        "报告排除标准、替代模型和敏感性分析，避免只呈现最优结果。"
      ]
    }
  ],
  power: {
    targetN: "N = 180",
    desiredPower: "Power = .80",
    alpha: "α = .05",
    effect: "预期效应量：f = 0.20（待更新）",
    note:
      "正式招募前用 G*Power 或模拟重新估算样本量。若资源有限，应优先减少条件数量，而不是把每个条件压缩到无法检验交互作用的规模。"
  },
  timeline: [
    {
      date: "10/05",
      title: "锁定研究问题与设计",
      detail: "明确理论机制、自变量操作定义、主要结果和竞争解释。",
      owner: "全员"
    },
    {
      date: "10/12",
      title: "完成预注册与材料",
      detail: "定稿假设、样本量依据、刺激材料、问卷和随机化方案。",
      owner: "设计组"
    },
    {
      date: "10/19",
      title: "完成试点与修订",
      detail: "邀请 5 至 8 人试测，检查材料理解、时长与技术问题。",
      owner: "执行组"
    },
    {
      date: "10/26",
      title: "正式收集数据",
      detail: "按预设标准招募，记录排除与流失，定期备份原始数据。",
      owner: "招募组"
    },
    {
      date: "11/02",
      title: "分析与成果呈现",
      detail: "完成分析脚本、结果复核、海报、报告与可复现材料。",
      owner: "分析组"
    }
  ],
  team: [
    { role: "协调与预注册", person: "【姓名】", duties: "进度管理、伦理材料、文档版本" },
    { role: "刺激与测量", person: "【姓名】", duties: "操纵材料、问卷、质量控制" },
    { role: "招募与执行", person: "【姓名】", duties: "受试者招募、排期、数据采集" },
    { role: "分析与复现", person: "【姓名】", duties: "分析脚本、数据可视化、结果核验" }
  ],
  decisions: [
    "把宽泛兴趣压缩成一个可以操纵、能够证伪的研究问题。",
    "确定自变量的操作定义，确保各条件只在关键维度上不同。",
    "确定主要结果、测量工具与单一主要假设，防止分析空间过大。",
    "计算样本量并确认时间、预算、伦理审查和招募渠道是否匹配。",
    "指定由谁保存原始数据、锁定分析脚本，以及何时触发复核。"
  ]
};


// Add a direct entry point to the HCI research poster.
window.addEventListener("DOMContentLoaded", () => {
  const posterLink = document.createElement("a");
  posterLink.href = "./poster.html";
  posterLink.textContent = "HCI Poster";
  posterLink.setAttribute("aria-label", "Open the HCI research poster");
  Object.assign(posterLink.style, {
    position: "fixed",
    right: "18px",
    bottom: "18px",
    zIndex: "40",
    padding: "11px 15px",
    color: "#ffffff",
    background: "#d85f45",
    border: "1px solid rgba(255,255,255,.3)",
    borderRadius: "6px",
    boxShadow: "0 12px 28px rgba(16,42,67,.22)",
    font: "700 13px/1.2 Aptos, sans-serif",
    letterSpacing: "0.02em",
    textDecoration: "none"
  });
  document.body.append(posterLink);
});
