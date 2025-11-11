import "./Index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CursorProvider from "./hooks/cursorProvider.jsx";

createRoot(document.getElementById("root")).render(
  <CursorProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CursorProvider>
);
