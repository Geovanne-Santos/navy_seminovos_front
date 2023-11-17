import { useState } from "react";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);


  return (
    <>
      <Header 
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
      />
      <main>
        <Outlet /> 
      </main>
    </>
  )
};
