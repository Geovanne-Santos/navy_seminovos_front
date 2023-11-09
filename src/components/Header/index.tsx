import * as Styled from "./header.styled";
import Logo from "../../assets/logo.png";
import { PiMagnifyingGlassDuotone } from 'react-icons/pi';
import { BsPeopleFill } from 'react-icons/bs';
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
          <a href="/"> <svg width="40" height="40" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26ZM13.5 24C19.299 24 24 19.299 24 13.5C24 7.70101 19.299 3 13.5 3C7.70101 3 3 7.70101 3 13.5C3 19.299 7.70101 24 13.5 24Z" fill="currentColor"/><g transform="translate(3, 3)"><g opacity="0.2"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 9.5C5.5 12.5376 7.96243 15 11 15C11.9892 15 12.9174 14.7389 13.7194 14.2818C13.7801 14.381 13.8534 14.4748 13.9393 14.5607L16.9393 17.5607C17.5251 18.1464 18.4749 18.1464 19.0607 17.5607C19.6464 16.9749 19.6464 16.0251 19.0607 15.4393L16.0607 12.4393C15.9748 12.3534 15.881 12.2801 15.7818 12.2194C16.2389 11.4174 16.5 10.4892 16.5 9.5C16.5 6.46243 14.0376 4 11 4C7.96243 4 5.5 6.46243 5.5 9.5Z" fill="currentColor"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M4.82845 4.82838C2.87583 6.781 2.87583 9.94683 4.82845 11.8994C6.78107 13.8521 9.9469 13.8521 11.8995 11.8994C13.8521 9.94683 13.8521 6.781 11.8995 4.82838C9.9469 2.87576 6.78107 2.87576 4.82845 4.82838ZM11.1924 11.1923C9.63031 12.7544 7.09765 12.7544 5.53556 11.1923C3.97346 9.63024 3.97346 7.09758 5.53556 5.53549C7.09765 3.97339 9.63031 3.97339 11.1924 5.53549C12.7545 7.09758 12.7545 9.63024 11.1924 11.1923Z" fill="currentColor"/><path d="M11.1924 12.6274C10.8019 12.2369 10.8019 11.6037 11.1924 11.2132C11.5829 10.8227 12.2161 10.8227 12.6066 11.2132L15.435 14.0416C15.8256 14.4321 15.8256 15.0653 15.435 15.4558C15.0445 15.8463 14.4114 15.8463 14.0208 15.4558L11.1924 12.6274Z" fill="currentColor"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M13 24.5C19.3513 24.5 24.5 19.3513 24.5 13C24.5 6.64873 19.3513 1.5 13 1.5C6.64873 1.5 1.5 6.64873 1.5 13C1.5 19.3513 6.64873 24.5 13 24.5ZM13 25.5C19.9036 25.5 25.5 19.9036 25.5 13C25.5 6.09644 19.9036 0.5 13 0.5C6.09644 0.5 0.5 6.09644 0.5 13C0.5 19.9036 6.09644 25.5 13 25.5Z" fill="currentColor"/></svg> Contato</a>
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
