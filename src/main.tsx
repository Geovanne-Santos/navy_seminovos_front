import React from "react";
import ReactDOM from "react-dom/client";
import "./Global.css"
import '../src/assets/fav_escuro.png'
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { queryClient } from "./api/services/queryClient";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

const temaEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches || false;

const favicon = document.getElementById('favicon') as HTMLLinkElement;

const trocarFavicon = (e: boolean) => {
  if (e) {
    favicon.href = '../src/assets/fav_claro.png';
  } else {
    favicon.href = '../src/assets/fav_escuro.png';
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => trocarFavicon(e.matches));
trocarFavicon(temaEscuro);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>

    </QueryClientProvider>
  </React.StrictMode>,
);
