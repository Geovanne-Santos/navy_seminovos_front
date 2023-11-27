import { createBrowserRouter } from "react-router-dom";
import { BuscarCarro } from "./pages/BuscarCarro";
import { Home } from "./pages/Home";
import { App } from "./App";
import { DetalheCarro } from "./pages/DetalheCarro";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "BuscarCarro",
        element: <BuscarCarro />
      },
      {
        path: "carro/:id",
        element: <DetalheCarro />
      }
    ]
  }
]);