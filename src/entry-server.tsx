import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { store } from "./store";

import HydrationCheck from "./utils/HydrationCheck";
import Error, { ErrorProps } from "./utils/Error";
import App from "./App";

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
      <Provider store={store}>
        <StaticRouter location={url}>
          <HydrationCheck>
            <App />
          </HydrationCheck>
        </StaticRouter>
      </Provider>
    </React.StrictMode>
  );
  return { html };
};
