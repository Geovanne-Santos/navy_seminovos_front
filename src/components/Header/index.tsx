import * as Styled from "./header.styled";
import Logo from "../../assets/logo.png";
import { PiMagnifyingGlassDuotone } from 'react-icons/pi';
import { BsPeopleFill, BsFillTelephoneFill } from 'react-icons/bs';
import { useEffect, useRef } from "react";


export const MenuAberto = ({
  menuAberto,
}: {
  menuAberto: boolean;
}): React.ReactElement => {
  return (
    <Styled.MenuAberto className={menuAberto ? "aberto" : ""}>
      <ul>
        <li>
          <a href="/"> <PiMagnifyingGlassDuotone /> Buscar carros</a>
        </li>
        <li>
          <a href="/Sobre"> <BsPeopleFill /> Quem somos</a>
        </li>
        <li>
          <a href="/"> <BsFillTelephoneFill /> Contato</a>
        </li>
      </ul>
    </Styled.MenuAberto>
  );
};

interface HeaderProps {
  menuAberto: boolean;
  setMenuAberto: Function;
}

export const Header = ({
  menuAberto,
  setMenuAberto,
}: HeaderProps): React.ReactElement => {
  const toggleMenu = (): void => {
    setMenuAberto(!menuAberto);
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clicarForaMenu = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setMenuAberto(false);
      }
    };

    document.addEventListener('mousedown', clicarForaMenu);
  
    return () => {
      document.removeEventListener('mousedown', clicarForaMenu);
    }
  }, [menuAberto])

  return (
    <Styled.header>
      <Styled.navbar>
        <Styled.logo>
          <img src={Logo} alt="Logo da Navy Semi Novos" />
        </Styled.logo>

        <Styled.IconeHamburguer toggleMenu={menuAberto} onClick={toggleMenu}>
          <div className="iconeHamburguer">
            <div className="metade"></div>
            <div></div>
            <div className="metade"></div>
          </div>
          <div ref={ref}>
            {menuAberto && <MenuAberto menuAberto={menuAberto} />}
          </div>
        </Styled.IconeHamburguer>
      </Styled.navbar>
    </Styled.header>
  );
};
