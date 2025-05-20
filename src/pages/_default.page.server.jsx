// src/pages/_default.page.server.jsx
import React from "react";
import ReactDOMServer from "react-dom/server";

export function render({ Page, pageProps }) {
  return ReactDOMServer.renderToString(<Page {...pageProps} />);
}
