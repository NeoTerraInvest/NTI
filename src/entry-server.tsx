import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";
import Error, { ErrorProps } from "./utils/Error";

interface IRenderProps extends ErrorProps {
  url: string;
  statusCode?: number;
}

export const render = ({ url, statusCode }: IRenderProps) => {
  if (statusCode) {
    return ReactDOMServer.renderToString(<Error statusCode={statusCode} />);
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
