# Group Research Site

这是一个可以直接部署到 GitHub Pages 的小组实验研究设计工作页。站点没有外部依赖，所有内容集中在 `content.js`。

## 本地预览

直接打开 `index.html` 即可查看。也可以在此目录运行：

```powershell
python -m http.server 8787
```

然后访问 `http://localhost:8787`。

## 编辑内容

有两种方式：

1. 在网页右上角点击编辑按钮，直接修改黄色占位字段；内容会保存在当前浏览器的本地存储中。
2. 直接编辑 `content.js`，这种方式适合把最终版本提交到 GitHub。

页面中的“保存”按钮只保存浏览器草稿，不会自动写回 `content.js`。正式发布前，请把讨论后的内容同步回 `content.js` 并提交。

## 发布到 GitHub Pages

这个目录已经包含 `.github/workflows/pages.yml`，推荐使用 GitHub Actions 发布。

1. 在 GitHub 新建仓库，例如 `group-research-project`。不要勾选自动添加 README。
2. 在本目录执行：

```powershell
git init -b main
git add .
git commit -m "Create group research project site"
git remote add origin https://github.com/YOUR-USERNAME/group-research-project.git
git push -u origin main
```

3. 打开仓库的 `Settings > Pages`，将 `Build and deployment > Source` 设为 `GitHub Actions`。
4. 等待工作流完成，站点地址通常是：

```text
https://YOUR-USERNAME.github.io/group-research-project/
```

如果仓库名称是 `YOUR-USERNAME.github.io`，站点地址会是：

```text
https://YOUR-USERNAME.github.io/
```

## 发布前检查

- 把 `content.js` 中所有 `【...】` 占位内容替换为小组最终决定。
- 确认样本量依据、排除标准和主要结果在收集数据前已经锁定。
- 检查团队成员姓名、指导教师、机构与联系方式是否需要出现。
- 若研究涉及人类参与者，先确认课程或机构要求的伦理审查流程。
- 用手机和电脑各检查一次页面，再执行 `Print > Save as PDF` 测试导出效果。
