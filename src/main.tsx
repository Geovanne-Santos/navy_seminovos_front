import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./Global.css"
import '../src/assets/fav_escuro.png'
import { QueryClient, QueryClientProvider } from "react-query";

const temaEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches || false;

const favicon = document.getElementById('favicon') as HTMLLinkElement;

const trocarFavicon = (e: boolean) => {
  if(e) {
    favicon.href = '../src/assets/fav_claro.png';
  } else {
    favicon.href = '../src/assets/fav_escuro.png';
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => trocarFavicon(e.matches));
trocarFavicon(temaEscuro);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> 
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
