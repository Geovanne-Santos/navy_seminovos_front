import * as Styled from "./header.styled";
import Logo from "../../assets/logo.png";


export const MenuAberto = ({menuAberto}: {menuAberto: boolean}): React.ReactElement => {

  return(
    <Styled.MenuAberto className={menuAberto ? "aberto" : ""}>
      <ul>
        <li><a href="/">Início</a></li>
        <li><a href="/">Sobre</a></li>
        <li><a href="/">Produtos</a></li>
      </ul>
    </Styled.MenuAberto>
  )
}

interface HeaderProps {
  menuAberto: boolean,
  setMenuAberto: Function
}

export const Header = ({menuAberto, setMenuAberto}: HeaderProps): React.ReactElement => {

  const toggleMenu = (): void => {
    setMenuAberto(!menuAberto);
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
        
        <Styled.IconeHamburguer toggleMenu={menuAberto} onClick={toggleMenu}>
          <div className="metade"></div>
          <div></div>
          <div className="metade"></div>
        </Styled.IconeHamburguer>
      </Styled.navbar>
    </Styled.header>
  );
};