import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ContactProvider } from "./context/ContactContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ContactProvider>
        <App />
      </ContactProvider>
    </ThemeProvider>
  </StrictMode>
);
