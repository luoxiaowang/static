# Todo「激活」按钮设计

日期：2026-08-18
状态：已批准

## 背景

工作台 Todo 卡片目前通过勾选（完成）、编辑、删除操作，状态由 `getTodoStatus` 根据截止时间自动推导（已完成 / 已过期 / 即将到期 / 进行中）。需要新增一个「激活」按钮，点击后表示任务已被用户明确激活，作为独立于自动状态的持久化标记。

## 需求

- Todo 卡片操作区新增「激活」按钮。
- 点击后任务标记为「已激活」，再次点击取消激活（开关切换）。
- 激活状态持久化，刷新、编辑后均保留。

## 数据模型

`todos` 记录新增字段：

- `activated: boolean`，默认 `false`。旧记录无该字段时按 `false` 处理。

## 交互与展示

- 未激活：操作区显示「激活」按钮。
- 已激活：
  - 元信息区显示「已激活」标签（自定义颜色，区别于现有绿/橙/红/蓝，如紫色）。
  - 按钮文字变为「取消激活」，样式区分。
- 勾选完成 / 恢复（`toggleTodo`）不影响 `activated`。
- 编辑 Todo（`saveTodo`）保留已有 `activated` 值。

## 变更点

### `scripts/vue-app.mjs`

- 新增 `toggleActivated(todo)`：翻转 `todo.activated`，`putRecord('todos', ...)` 持久化，`loadAll()` 刷新。
- `openTodoDialog` / `saveTodo`：正确处理 `activated` 字段的保留与默认值。
- `setup` 返回对象中导出 `toggleActivated`。

### `index.html`（Todo 卡片，第 34 行）

- `record-meta` 中，`todo.activated` 为真时追加 `el-tag` 显示「已激活」。
- `record-actions` 中新增「激活 / 取消激活」按钮，点击调用 `toggleActivated(todo)`。

### `styles/components.css`

- 新增 `.tag-activated` 等样式，为「已激活」标签提供自定义颜色，与现有配色区分。

## 构建与验证

- 运行 `node workbench/build-bundle.mjs` 重新生成 `scripts/app.bundle.js`。
- 浏览器实测：
  - 激活 → 显示「已激活」标签与「取消激活」按钮
  - 取消激活 → 恢复
  - 编辑后激活状态保留
  - 刷新后激活状态保留

## 测试

切换逻辑位于浏览器端且依赖 IndexedDB，现有测试不覆盖 vue-app；不新增单元测试，以浏览器实测为准。
