# 全站研发学习实践

面向前端工程师的后端学习资料。英文目录使用 `fullstack-learning`，每个主题有稳定的独立地址，便于未来添加 Spring、数据库等内容。

## 当前内容

- `index.html`：学习主题入口。
- `java/index.html`：21 章 Java 语法与应用开发手册，中文解释、示例、练习及答案。
- `java/examples/StudyTasks.java`：Java 21 标准库命令行任务管理应用。
- `java/examples/StudyTasksTest.java`：无需第三方依赖的 29 项自动检查。
- `assets/guide.css`、`assets/guide.js`：移动端阅读、目录、全文章节筛选、复制代码、学习进度和打印样式。
- `tests/`：链接/内容检查与浏览器交互检查。

未来可新增 `spring/index.html`、`database/index.html` 等主题，再更新入口页；本期仅 Java 主题已实现。页面是静态 HTML，没有运行时 CDN 依赖，不需要构建。

## 阅读与运行

直接打开 `index.html` 即可阅读。推荐在仓库根目录运行：

```sh
python3 -m http.server 8765
```

然后访问 `http://localhost:8765/fullstack-learning/`。禁用 JavaScript 时正文、目录链接和原生折叠练习仍可用。学习进度仅保存到当前浏览器的 localStorage，清除站点数据后会丢失，不会上传。

## Java 练习

安装完整 JDK 21 或以上，确保 `java --version`、`javac --version` 指向同一 JDK。在 `java/examples/` 内执行：

```sh
javac --release 21 -encoding UTF-8 -d out StudyTasks.java StudyTasksTest.java
java -cp out StudyTasks tasks.tsv add "学习泛型"
java -cp out StudyTasks tasks.tsv list
java -cp out StudyTasks tasks.tsv done 1
java -cp out StudyTasksTest
```

测试成功输出 `PASS: 29 checks`。项目仅用于单用户、单进程练习；不具备数据库事务或多进程并发写入保障。不要用重要文件作为数据文件路径。

## 页面验证

在仓库根目录：

```sh
python3 fullstack-learning/tests/check_content.py
node --check fullstack-learning/assets/guide.js
```

浏览器检查需要 Node.js、Playwright 及 Chromium，测试访问上述本地服务器：

```sh
node fullstack-learning/tests/reader.cjs
```

可通过 `CHROMIUM_PATH` 指定 Chromium 路径，通过 `PLAYWRIGHT_MODULE` 指定 Playwright 模块，通过 `BASE_URL` 指定学习主题入口。测试覆盖 320/390/768/1440px 布局、移动目录、搜索空结果/清除、筛选后的深链接、进度保存与取消、复制代码、无 JavaScript、存储不可用等场景。

## 维护内容

直接修改对应 HTML；代码块里的 `<`、`>`、`&` 必须 HTML 转义。为新章节提供唯一 id、目录链接、解释、注明上下文的示例及练习。更新章节总数后同步进度文案与验证。Java 21 是基础示例的统一版本，不使用预览特性；新增版本内容应明确标注。
