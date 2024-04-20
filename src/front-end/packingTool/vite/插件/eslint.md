---
title: eslint配置
category:
  - 插件
tag:
  - vite
  - 插件
  - eslint
---

## 安装

npm install eslint --save-dev

## 初始化

npx eslint --init
后选择配置

## .eslintrc.js

```js
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        "vue/setup-compiler-macros": true,
    },
    parser: "vue-eslint-parser",
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        // "standard-with-typescript",
        "plugin:@typescript-eslint/recommended",
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: "@typescript-eslint/parser",
    },
    plugins: ["vue", "@typescript-eslint"],
    rules: {
        quotes: "off",
        semi: "off",
        "comma-dangle": "off",
        "no-undef": "off",
        "prefer-const": "off",
        "vue/multi-word-component-names": "off",
        "no-async-promise-executor": "off",
        "no-debugger": "off",
        eqeqeq: "error",
        "default-case": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "no-useless-escape": "off",
    },
};
```

## 使用vscode快捷键一键格式化(弃用)

右键 -> 使用…格式化文档 -> (最后一项)配置默认格式化程序 -> 选择ESlint。

## 错误信息显示在浏览器界面上

### 下载

npm install vite-plugin-eslint --save-dev

### 配置

```js
import {defineConfig} from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
    plugins: [eslintPlugin()],
});
```