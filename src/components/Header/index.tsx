import { useState } from "react";
import * as Styled from "./header.styled";
import Logo from "../../assets/logo.png";
//import { FaBarsStaggered, FaXmark } from "react-icons/fa6"

export const Header = () => {
  const [Menu, AbreMenu] = useState(false);


  const toggleMenu = () => {
    AbreMenu(!Menu);
  }

  if(Menu) {
    console.log("Tá ativado")
  }

  return (
    <Styled.header>
      <Styled.navbar>
        <Styled.logo>
          <img
            src={Logo}
            alt="Logo da Navy Semi Novos"
          />
        </Styled.logo>
        
        <Styled.IconeHamburguer toggleMenu={Menu} onClick={toggleMenu}>
          <div></div>
          <div className="metade"></div>
          <div></div>
          <div className="metade"></div>
        </Styled.IconeHamburguer>
      </Styled.navbar>
    </Styled.header>
  );
};