const fs = require("node:fs");
const path = require("node:path");
const resolve = (name) =>
  require.resolve(name, {
    paths: [__dirname, path.resolve(__dirname, "../../mansion-demo")],
  });
const esbuild = require(resolve("esbuild"));
const out = esbuild.buildSync({
  entryPoints: [path.join(__dirname, "src/game.js")],
  bundle: true,
  minify: true,
  write: false,
  format: "iife",
  target: "es2020",
  nodePaths: [path.dirname(path.dirname(path.dirname(resolve("three"))))],
});
const read = (name) =>
  fs.readFileSync(path.join(__dirname, "src", name), "utf8");
fs.writeFileSync(
  path.join(__dirname, "index.html"),
  read("page.html")
    .replace("/*STYLE*/", () => read("style.css"))
    .replace("/*SCRIPT*/", () =>
      out.outputFiles[0].text.replace(/<\/script/gi, "<\\/script"),
    ),
);
