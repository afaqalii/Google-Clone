import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { StateProvider } from "./ContextApi";
import reducer, { initialState } from "./reducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
);
