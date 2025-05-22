import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
