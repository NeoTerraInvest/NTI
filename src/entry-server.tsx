import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";
import HydrationCheck from "./utils/Error";

export const render = (url: string, statusCode: number) => {
  if (statusCode) {
    return ReactDOMServer.renderToString(
      <HydrationCheck statusCode={statusCode} />
    );
  }

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  return { html };
};
