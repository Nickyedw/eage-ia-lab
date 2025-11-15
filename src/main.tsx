import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// importa Tailwind (index.css)
import "./index.css";
// importa tus variables y estilos globales
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
