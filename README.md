# 🐇 Vue3‑Mall Project

> 小兔鲜 —— 基于 Vue 3 + Vite 的生鲜电商前端模版  
> 一个高性能、高可维护、实战演练的「商城前端」示例工程，涵盖首页、商品、购物车、订单、用户中心等核心场景。

---

## 📌 目录

1. [项目亮点](#project-highlights)  
2. [技术栈](#tech-stack)  
3. [功能概览](#features)  
4. [环境准备](#prerequisites)  
5. [快速启动](#quick-start)  
6. [代码规范](#code-quality)  
7. [项目结构](#project-structure)  
8. [部署与构建](#build-deploy)  
9. [开发者指南](#developer-notes)  
10. [常见问题](#faq)  
11. [许可证](#license)

---

## 🏅 项目亮点 {#project-highlights}

- 使用 Vue 3 Composition API 编写，逻辑清晰、复用简单  
- 基于 Vite 的现代构建，开发启动快速、热更新无刷新  
- Pinia + 插件实现持久化状态管理，支持用户/购物车全局共享  
- Axios 封装 HTTP 请求，符合 RESTful 风格  
- Element Plus 作为 UI 框架，涵盖常用组件 ✨  
- 支持 SCSS/​Less、PostCSS，样式拆分层次化  
- ESLint + oxlint 规范代码，`npm run lint` 自动修复  
- 配置了自动导入和组件按需加载插件，减轻写 import 的负担

---

## 🚀 功能概览 {#features}

- **首页**：轮播图、分类导航、爆款推荐、限时秒杀
- **商品**：列表/筛选、详情页、规格选择、搜索
- **购物车**：增删改查、数量调整、结算价格
- **订单**：地址管理、订单确认、提交、订单列表/详情
- **用户中心**：个人资料、订单列表、登录/注册
- **支付流程**：订单支付与支付结果页面
- 响应式布局支持手机/PC

---

## 🛠 技术栈 {#tech-stack}

| 类别           | 技术/版本                           |
|----------------|------------------------------------|
| 框架 & 核心库   | Vue 3.5+, Vue Router 5, Pinia 3     |
| 构建 & 工具     | Vite 7, ESBuild                     |
| UI             | Element Plus 2.13                   |
| 状态           | Pinia + pinia-plugin-persistedstate |
| 网络请求       | Axios 1.13                         |
| 日期处理       | dayjs                              |
| 代码质量       | ESLint 9, oxlint                   |
| 样式           | SCSS/Less, PostCSS                 |
| 其它           | @vueuse/core, vite-plugin-vue-devtools |

> 具体版本见 `package.json`。

---

## 🧩 环境准备 {#prerequisites}

- **Node.js** 版本：≥ 16（推荐 18.x LTS，兼容 engines 中指定的 20+）。  
- 包管理器：npm 8+ 或 pnpm 7+（推荐 pnpm 提升性能）。

确认安装：

```bash
node -v
npm -v   # 或 pnpm -v
```

---

## ⚡ 快速开始 {#quick-start}

1. 克隆仓库：

   ```bash
   git clone https://your-repo-url.git
   cd vue3-mall-project
   ```

2. 安装依赖：

   ```bash
   # npm
   npm install

   # 或者 pnpm
   pnpm install
   ```

3. 本地开发：

   ```bash
   npm run dev
   # 访问 http://localhost:5173/
   ```

4. 生产构建：

   ```bash
   npm run build
   npm run preview   # 本地预览构建结果
   ```

5. 代码格式与校验：

   ```bash
   npm run lint          # 运行全部 lint 任务
   npm run lint:eslint   # ESLint
   npm run lint:oxlint   # OXLint
   ```

---

## ✅ 代码规范 {#code-quality}

- Vue 组件遵循官方风格指南 (Composition API、`<script setup>`、`<style scoped>`)  
- JS/TS 代码使用 ESLint/oxlint 强制格式化和规则检查  
- 全局变量与共享常量存放在 `src/utils` 或 `src/config`  
- API 封装在 `src/apis`，视图组件只依赖 store 或组合函数  
- 使用 `unplugin-auto-import`/`unplugin-vue-components` 实现自动导入  
- SCSS 变量与 mixin 在 `src/styles` 管理

---

## 📁 项目结构 {#project-structure}

```text
├─ public/                       # 静态资源
├─ src/
│   ├─ apis/                     # 后端接口封装
│   ├─ assets/                   # 全局样式、图片等
│   ├─ components/               # 公共组件
│   ├─ composables/              # 组合式工具函数
│   ├─ directives/               # 自定义指令
│   ├─ router/                   # 路由配置
│   ├─ stores/                   # Pinia 状态
│   ├─ styles/                   # SCSS 变量与主题
│   ├─ utils/                    # 工具函数（http、format等）
│   └─ views/                    # 页面级组件
├─ eslint.config.js              # ESLint 配置
├─ vite.config.js                # Vite 配置
├─ package.json
├─ jsconfig.json                 # IDE 路径别名
└─ README.md                     # 如当前文档
```

> 详细目录请参考仓库根目录结构。

---

## 📦 部署与构建 {#build-deploy}

- 构建命令：`npm run build`
- 生成文件位于 `dist/`，即可部署到任意静态服务器（Nginx、Netlify、Vercel 等）。
- 如果需要SSR或代理，可在 `vite.config.js` 中配置 `server.proxy` 或 `ssr`。

---

## 👨‍💻 开发者指南 {#developer-notes}

- **新增页面**：在 `src/views` 目录建新文件夹并注册路由。  
- **组件复用**：放置于 `src/components` 并按需自动导入。  
- **状态管理**：使用 `defineStore` 创建 Pinia store，可开启持久化。  
- **API 请求**：在 `src/apis` 创建函数，统一处理错误与 token。  
- **样式**：使用 SCSS 变量(`@/styles/var.scss`)和公共 mixin。

> 提交前请运行 `npm run lint` 并确保没有未处理的编译错误。

---

## ❓ 常见问题 (FAQ) {#faq}

**Q**: 如何修改 Element Plus 主题色？  
A: 编辑 `src/styles/element/index.scss` 并重启 dev 服务。

**Q**: 路由跳转后页面未滚动到顶部？  
A: 可在 `router/index.js` 中配置 `scrollBehavior`。

**Q**: 如何接入真实后端？  
A: 修改 `src/apis/*` 的 baseURL 或通过 Vite 代理在 `vite.config.js` 设置 `/api` 转发。

---

## 📄 许可证 {#license}

MIT License — 详见 [LICENSE](./LICENSE) 文件（若无请创建）。

---

> 🎉 感谢使用 Vue3‑Mall！如有建议或贡献，欢迎提交 Issues/PR 😊
