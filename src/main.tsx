import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/general.css";
import "./styles/colors.css";
import "./styles/shadows.css";
import "./index.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
