import "./index.scss";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import HydrationCheck from "./utils/HydrationCheck";
import App from "./App";

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HydrationCheck>
          <App />
        </HydrationCheck>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
