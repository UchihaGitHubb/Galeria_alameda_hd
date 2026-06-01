import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./styles/mobile-safe.css";
import App from "./App";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { initializeTheme } from "./helper/theme";

initializeTheme();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
