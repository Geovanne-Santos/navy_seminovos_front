import { useState } from "react";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { CarrosProvider } from "./context/carrosContext";




export const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);


  return (
    <>
      <CarrosProvider>
        <Header
          menuAberto={menuAberto}
          setMenuAberto={setMenuAberto}
        />
        <main>
          <Outlet />
        </main>
      </CarrosProvider>

    </>
  )
};
