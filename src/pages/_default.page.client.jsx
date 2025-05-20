// src/pages/_default.page.client.jsx
import ReactDOM from "react-dom/client";
import { createPageRenderer } from "vite-plugin-ssr/client";

const { hydrate } = createPageRenderer();

hydrate();
