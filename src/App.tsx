import { useState } from "react";
import { Header } from "./components/Header";
import { AppRouter } from "./router";

export const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);


  return (
    <>
      <Header 
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
      />
      <main>
        <AppRouter /> 
      </main>
    </>
  )
};
