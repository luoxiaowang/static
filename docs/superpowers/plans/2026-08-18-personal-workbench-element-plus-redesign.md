# Personal Workbench Element Plus Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将现有个人工作台重构为 Vue 3 + Element Plus 的专业中后台界面，并实现左侧导航、普通删除二次点击、输入确认清空和真实 SVG 沙漏动画。

**Architecture:** 保留现有 IndexedDB、日期和备份纯逻辑模块，新建单一 Vue 应用层统一管理响应式状态与 Element Plus 组件。构建脚本继续将本地模块打成经典脚本包，Vue 与 Element Plus 使用固定版本 CDN global 构建，使页面同时兼容 `file://` 与静态服务器。

**Tech Stack:** Vue 3.5.40 global build、Element Plus 2.14.3、Element Plus Icons 2.3.2、原生 IndexedDB、SVG、Node.js `node:test`

---

### Task 1: 增加新版结构与交互规则测试

**Files:**
- Create: `workbench/tests/redesign.test.mjs`
- Modify: `workbench/tests/direct-open.test.mjs`

- [ ] **Step 1: 编写失败测试**

测试 `index.html` 使用锁定版本 CDN、包含 Vue 根节点和左侧导航模板；测试新的删除状态函数在第一次点击进入确认、第二次点击执行删除、超时后失效；测试沙漏模板包含玻璃、上部沙面、沙流和下部沙堆。

```js
assert.match(html, /vue@3\.5\.40/);
assert.match(html, /element-plus@2\.14\.3/);
assert.match(html, /class="sidebar/);
assert.match(source, /sand-stream/);
```

- [ ] **Step 2: 运行测试确认失败**

Run: `node --test workbench/tests/redesign.test.mjs`

Expected: 因 Vue 页面结构和新版交互尚未实现而失败。

### Task 2: 建立 Vue + Element Plus 页面骨架

**Files:**
- Modify: `workbench/index.html`
- Modify: `workbench/styles/base.css`
- Modify: `workbench/styles/components.css`

- [ ] **Step 1: 重写页面模板**

在 `#app` 内使用 `el-container`、`el-aside`、`el-menu`、`el-main`、`el-dialog`、`el-drawer` 和四个条件面板。头部脚本按顺序加载 Vue、Element Plus、中文语言包、图标包和本地 `app.bundle.js`，全部锁定版本。

- [ ] **Step 2: 重建专业中后台视觉系统**

定义 220px/72px 侧栏、浅灰主背景、白色内容卡片、12px 圆角、24/16/14/12px 字号层级和深灰蓝暗色变量。移动端隐藏固定侧栏并显示 Drawer 导航。

- [ ] **Step 3: 增加 CDN 失败提示**

页面默认显示轻量加载层；若 `Vue` 或 `ElementPlus` 未加载，3 秒后显示中文网络错误和刷新按钮。

### Task 3: 实现 Vue 应用与业务模块

**Files:**
- Create: `workbench/scripts/vue-app.mjs`
- Create: `workbench/scripts/core/delete-confirm.mjs`
- Modify: `workbench/build-bundle.mjs`

- [ ] **Step 1: 测试并实现删除状态函数**

实现 `createDeleteConfirmation(windowMs)`，返回 `click(key, now)`、`cancel()`、`isPending(key, now)`；第一次点击返回 `false`，窗口内第二次返回 `true`，超时重新进入第一次确认。

- [ ] **Step 2: 初始化 Vue 应用和 Element Plus**

使用 Composition API 管理当前菜单、侧栏、设置、表单、筛选、业务集合和时间。注册 Element Plus 中文配置和图标组件，启动时读取 IndexedDB。

- [ ] **Step 3: 实现 Todo、自定义倒计时、灵感和碎碎念 CRUD**

所有新增编辑使用 `el-dialog` 与 `el-form`；普通删除统一调用二次点击状态函数；切换菜单和点击页面空白处取消确认状态。

- [ ] **Step 4: 实现设置与数据管理**

设置 Drawer 管理主题、生日、通知、提示音、导出、合并导入和覆盖还原。清空弹窗仅在输入值严格等于“确认删除”时启用确认按钮。

- [ ] **Step 5: 更新经典脚本构建**

构建顺序改为日期、备份、删除确认、IndexedDB、Vue 应用，不再打包旧的 DOM 与 feature 模块。运行 `node workbench/build-bundle.mjs` 生成新版 `app.bundle.js`。

### Task 4: 实现真实 SVG 沙漏

**Files:**
- Modify: `workbench/scripts/vue-app.mjs`
- Rewrite: `workbench/styles/hourglass.css`

- [ ] **Step 1: 创建沙漏组件**

定义 `HourglassVisual`，使用 SVG 渐变、阴影、玻璃路径、木质横梁、金属支柱、上部沙面、中部沙流、颗粒和下部沙堆。组件接收 `ratio` 与 `accent`。

- [ ] **Step 2: 绑定实际时间比例**

本日、本周、本月、本年和人生卡片每秒更新剩余时间、已流逝百分比与 SVG 沙量；只更新属性，不重建组件。

- [ ] **Step 3: 增加动效与无障碍适配**

沙流和颗粒使用轻量 CSS 动画；在 `prefers-reduced-motion: reduce` 下禁用动画。

### Task 5: 集成与验收

**Files:**
- Modify: `workbench/README.md`
- Modify: `workbench/tests/direct-open.test.mjs`

- [ ] **Step 1: 更新使用说明**

说明直接打开需要联网加载固定版本 CDN，静态托管无需构建；修改本地源码后运行构建脚本。

- [ ] **Step 2: 运行自动检查**

Run: `node workbench/build-bundle.mjs && node --test workbench/tests/*.test.mjs && find workbench/scripts -name '*.mjs' -print0 | xargs -0 -n1 node --check && node --check workbench/scripts/app.bundle.js`

Expected: 全部测试和语法检查通过。

- [ ] **Step 3: 浏览器桌面验收**

通过本地静态服务器验证 CDN 加载、左侧导航折叠、四个页面、Element Plus 表单、二次点击删除、输入确认清空、主题切换和 SVG 沙漏。

- [ ] **Step 4: 浏览器移动端验收**

在 390×844 视口验证 Drawer 菜单、卡片单列、底部输入区和无横向溢出。

- [ ] **Step 5: 最终工作区检查**

Run: `git diff --check && git status --short`

Expected: 无空白错误；改动仅位于设计、计划和 `workbench/`，不执行 Git commit。
