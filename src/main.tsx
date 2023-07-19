import React from "react";
import { mainTheme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { UserProviders } from "./context/UserContext/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <UserProviders>
          <App />
        </UserProviders>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
