import "./index.scss";

import App from "./App.jsx";
import MovieProvider from "./contexts/MovieContexts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </StrictMode>
);
