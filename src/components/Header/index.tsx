import * as Styled from "./header.styled";
import Logo from "../../assets/logo.png";
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
          <a href="/"> <svg width="3rem" height="3rem" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26ZM13.5 24C19.299 24 24 19.299 24 13.5C24 7.70101 19.299 3 13.5 3C7.70101 3 3 7.70101 3 13.5C3 19.299 7.70101 24 13.5 24Z" fill="currentColor"/><g transform="translate(3, 3)"><g opacity="0.2"><path fillRule="evenodd" clipRule="evenodd" d="M5.5 9.5C5.5 12.5376 7.96243 15 11 15C11.9892 15 12.9174 14.7389 13.7194 14.2818C13.7801 14.381 13.8534 14.4748 13.9393 14.5607L16.9393 17.5607C17.5251 18.1464 18.4749 18.1464 19.0607 17.5607C19.6464 16.9749 19.6464 16.0251 19.0607 15.4393L16.0607 12.4393C15.9748 12.3534 15.881 12.2801 15.7818 12.2194C16.2389 11.4174 16.5 10.4892 16.5 9.5C16.5 6.46243 14.0376 4 11 4C7.96243 4 5.5 6.46243 5.5 9.5Z" fill="currentColor"/></g><path fillRule="evenodd" clipRule="evenodd" d="M4.82845 4.82838C2.87583 6.781 2.87583 9.94683 4.82845 11.8994C6.78107 13.8521 9.9469 13.8521 11.8995 11.8994C13.8521 9.94683 13.8521 6.781 11.8995 4.82838C9.9469 2.87576 6.78107 2.87576 4.82845 4.82838ZM11.1924 11.1923C9.63031 12.7544 7.09765 12.7544 5.53556 11.1923C3.97346 9.63024 3.97346 7.09758 5.53556 5.53549C7.09765 3.97339 9.63031 3.97339 11.1924 5.53549C12.7545 7.09758 12.7545 9.63024 11.1924 11.1923Z" fill="currentColor"/><path d="M11.1924 12.6274C10.8019 12.2369 10.8019 11.6037 11.1924 11.2132C11.5829 10.8227 12.2161 10.8227 12.6066 11.2132L15.435 14.0416C15.8256 14.4321 15.8256 15.0653 15.435 15.4558C15.0445 15.8463 14.4114 15.8463 14.0208 15.4558L11.1924 12.6274Z" fill="currentColor"/></g><path fillRule="evenodd" clipRule="evenodd" d="M13 24.5C19.3513 24.5 24.5 19.3513 24.5 13C24.5 6.64873 19.3513 1.5 13 1.5C6.64873 1.5 1.5 6.64873 1.5 13C1.5 19.3513 6.64873 24.5 13 24.5ZM13 25.5C19.9036 25.5 25.5 19.9036 25.5 13C25.5 6.09644 19.9036 0.5 13 0.5C6.09644 0.5 0.5 6.09644 0.5 13C0.5 19.9036 6.09644 25.5 13 25.5Z" fill="currentColor"/></svg> Buscar carros</a>
        </li>
        <li>
          <a href="/Sobre"> <svg width="3rem" height="3rem" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26ZM13.5 24C19.299 24 24 19.299 24 13.5C24 7.70101 19.299 3 13.5 3C7.70101 3 3 7.70101 3 13.5C3 19.299 7.70101 24 13.5 24Z" fill="currentColor"/><g transform="translate(3, 3)"><g opacity="0.2"><path d="M9.75 7.75C9.75 9.40685 8.40685 10.75 6.75 10.75C5.09315 10.75 3.75 9.40685 3.75 7.75C3.75 6.09315 5.09315 4.75 6.75 4.75C8.40685 4.75 9.75 6.09315 9.75 7.75Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M6.75 8.75C7.30228 8.75 7.75 8.30228 7.75 7.75C7.75 7.19772 7.30228 6.75 6.75 6.75C6.19772 6.75 5.75 7.19772 5.75 7.75C5.75 8.30228 6.19772 8.75 6.75 8.75ZM6.75 10.75C8.40685 10.75 9.75 9.40685 9.75 7.75C9.75 6.09315 8.40685 4.75 6.75 4.75C5.09315 4.75 3.75 6.09315 3.75 7.75C3.75 9.40685 5.09315 10.75 6.75 10.75Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M6.80007 11.5C5.97162 11.5 5.30003 12.1716 5.30003 13L5.30002 14.5C5.30001 15.0523 4.8523 15.5 4.30001 15.5C3.74773 15.5 3.30001 15.0523 3.30002 14.5L3.30003 13C3.30004 11.067 4.86706 9.5 6.80007 9.5C8.73305 9.5 10.3 11.067 10.3 13V13.5C10.3 14.0523 9.85233 14.5 9.30004 14.5C8.74776 14.5 8.30004 14.0523 8.30004 13.5V13C8.30004 12.1716 7.62848 11.5 6.80007 11.5Z" fill="currentColor"/><path d="M12.75 7.75C12.75 9.40685 14.0931 10.75 15.75 10.75C17.4069 10.75 18.75 9.40685 18.75 7.75C18.75 6.09315 17.4069 4.75 15.75 4.75C14.0931 4.75 12.75 6.09315 12.75 7.75Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M15.75 8.75C15.1977 8.75 14.75 8.30228 14.75 7.75C14.75 7.19772 15.1977 6.75 15.75 6.75C16.3023 6.75 16.75 7.19772 16.75 7.75C16.75 8.30228 16.3023 8.75 15.75 8.75ZM15.75 10.75C14.0931 10.75 12.75 9.40685 12.75 7.75C12.75 6.09315 14.0931 4.75 15.75 4.75C17.4069 4.75 18.75 6.09315 18.75 7.75C18.75 9.40685 17.4069 10.75 15.75 10.75Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M15.6999 11.5C16.5284 11.5 17.2 12.1716 17.2 13L17.2 14.5C17.2 15.0523 17.6477 15.5 18.2 15.5C18.7523 15.5 19.2 15.0523 19.2 14.5L19.2 13C19.2 11.067 17.6329 9.5 15.6999 9.5C13.7669 9.5 12.2 11.067 12.2 13V13.5C12.2 14.0523 12.6477 14.5 13.2 14.5C13.7522 14.5 14.2 14.0523 14.2 13.5V13C14.2 12.1716 14.8715 11.5 15.6999 11.5Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M11.3001 14.25C10.4716 14.25 9.80003 14.9216 9.80003 15.75L9.80002 17.25C9.80001 17.8023 9.3523 18.25 8.80001 18.25C8.24773 18.25 7.80001 17.8023 7.80002 17.25L7.80003 15.75C7.80004 13.817 9.36706 12.25 11.3001 12.25C13.2331 12.25 14.8 13.817 14.8 15.75V17.25C14.8 17.8023 14.3523 18.25 13.8 18.25C13.2478 18.25 12.8 17.8023 12.8 17.25V15.75C12.8 14.9216 12.1285 14.25 11.3001 14.25Z" fill="currentColor"/><path d="M14.25 10.5C14.25 12.1569 12.9069 13.5 11.25 13.5C9.59315 13.5 8.25 12.1569 8.25 10.5C8.25 8.84315 9.59315 7.5 11.25 7.5C12.9069 7.5 14.25 8.84315 14.25 10.5Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M11.25 11.5C11.8023 11.5 12.25 11.0523 12.25 10.5C12.25 9.94772 11.8023 9.5 11.25 9.5C10.6977 9.5 10.25 9.94772 10.25 10.5C10.25 11.0523 10.6977 11.5 11.25 11.5ZM11.25 13.5C12.9069 13.5 14.25 12.1569 14.25 10.5C14.25 8.84315 12.9069 7.5 11.25 7.5C9.59315 7.5 8.25 8.84315 8.25 10.5C8.25 12.1569 9.59315 13.5 11.25 13.5Z" fill="currentColor"/><path d="M4.25 11.5H9.25V15.5H4.25V11.5Z" fill="currentColor"/><path d="M13.25 11.5H18.25V15.5H13.25V11.5Z" fill="currentColor"/><path d="M9.25 13.5H13.25L13.75 18.25H8.75L9.25 13.5Z" fill="currentColor"/></g><path fillRule="evenodd" clipRule="evenodd" d="M5.00003 9C6.1046 9 7.00003 8.10457 7.00003 7C7.00003 5.89543 6.1046 5 5.00003 5C3.89546 5 3.00003 5.89543 3.00003 7C3.00003 8.10457 3.89546 9 5.00003 9ZM5.00003 10C6.65688 10 8.00003 8.65685 8.00003 7C8.00003 5.34315 6.65688 4 5.00003 4C3.34318 4 2.00003 5.34315 2.00003 7C2.00003 8.65685 3.34318 10 5.00003 10Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M3.85355 8.89645C4.04882 9.09171 4.04882 9.40829 3.85355 9.60355L3.51612 9.94098C3.13529 10.3218 2.84835 10.7861 2.67803 11.297C2.56011 11.6508 2.5 12.0212 2.5 12.3941V14.25C2.5 14.5262 2.27614 14.75 2 14.75C1.72386 14.75 1.5 14.5262 1.5 14.25V12.3941C1.5 11.9138 1.57744 11.4365 1.72935 10.9808C1.94876 10.3226 2.3184 9.72449 2.80902 9.23388L3.14645 8.89645C3.34171 8.70118 3.65829 8.70118 3.85355 8.89645Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M15.6464 8.59646C15.4512 8.79172 15.4512 9.1083 15.6464 9.30357L15.9839 9.641C16.3647 10.0218 16.6517 10.4861 16.822 10.9971C16.9399 11.3508 17 11.7213 17 12.0941V14.25C17 14.5261 17.2239 14.75 17.5 14.75C17.7761 14.75 18 14.5261 18 14.25V12.0941C18 11.6138 17.9226 11.1365 17.7707 10.6808C17.5512 10.0226 17.1816 9.4245 16.691 8.93389L16.3536 8.59646C16.1583 8.4012 15.8417 8.4012 15.6464 8.59646Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M14 9C12.8955 9 12 8.10457 12 7C12 5.89543 12.8955 5 14 5C15.1046 5 16 5.89543 16 7C16 8.10457 15.1046 9 14 9ZM14 10C12.3432 10 11 8.65685 11 7C11 5.34315 12.3432 4 14 4C15.6569 4 17 5.34315 17 7C17 8.65685 15.6569 10 14 10Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M9.50006 13.25C8.11933 13.25 7.00002 14.3693 7.00001 15.75L7 17.05C7 17.3261 6.77614 17.55 6.5 17.55C6.22385 17.55 6 17.3261 6 17.05L6.00001 15.75C6.00002 13.817 7.56704 12.25 9.50006 12.25C11.433 12.25 13 13.817 13 15.75V17.05C13 17.3261 12.7762 17.55 12.5 17.55C12.2239 17.55 12 17.3261 12 17.05V15.75C12 14.3693 10.8808 13.25 9.50006 13.25Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M9.50003 11.75C10.6046 11.75 11.5 10.8546 11.5 9.75C11.5 8.64543 10.6046 7.75 9.50003 7.75C8.39546 7.75 7.50003 8.64543 7.50003 9.75C7.50003 10.8546 8.39546 11.75 9.50003 11.75ZM9.50003 12.75C11.1569 12.75 12.5 11.4069 12.5 9.75C12.5 8.09315 11.1569 6.75 9.50003 6.75C7.84318 6.75 6.50003 8.09315 6.50003 9.75C6.50003 11.4069 7.84318 12.75 9.50003 12.75Z" fill="currentColor"/></g><path fillRule="evenodd" clipRule="evenodd" d="M13 24.5C19.3513 24.5 24.5 19.3513 24.5 13C24.5 6.64873 19.3513 1.5 13 1.5C6.64873 1.5 1.5 6.64873 1.5 13C1.5 19.3513 6.64873 24.5 13 24.5ZM13 25.5C19.9036 25.5 25.5 19.9036 25.5 13C25.5 6.09644 19.9036 0.5 13 0.5C6.09644 0.5 0.5 6.09644 0.5 13C0.5 19.9036 6.09644 25.5 13 25.5Z" fill="currentColor"/></svg> Quem somos</a>
        </li>
        <li>
          <a href="/"> <svg width="3rem" height="3rem" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26ZM13.5 24C19.299 24 24 19.299 24 13.5C24 7.70101 19.299 3 13.5 3C7.70101 3 3 7.70101 3 13.5C3 19.299 7.70101 24 13.5 24Z" fill="currentColor"/><g transform="translate(3, 3)"><g opacity="0.2"><path d="M12.4389 11.7743L13.0208 11.1924C14.1924 10.0208 16.0919 10.0208 17.2635 11.1924L18.6777 12.6066C19.8492 13.7782 19.8492 15.6777 18.6777 16.8492L15.872 19.6549C15.5932 19.9337 15.1766 20.0227 14.8082 19.882C8.31798 17.4042 3.87438 12.9301 1.50011 6.5696C1.36317 6.20273 1.45296 5.78968 1.72986 5.51278L4.53554 2.70711C5.70711 1.53554 7.6066 1.53554 8.77818 2.70711L10.1924 4.12132C11.364 5.2929 11.364 7.19239 10.1924 8.36396L9.61168 8.94467C10.4943 9.94935 11.4366 10.8925 12.4389 11.7743Z" fill="currentColor"/></g><path fillRule="evenodd" clipRule="evenodd" d="M12.8744 9.54594L11.9632 10.4571C10.6931 9.37249 9.51513 8.19356 8.42915 6.9201L9.33884 6.01041C10.3151 5.0341 10.3151 3.45119 9.33884 2.47488L7.92462 1.06066C6.94831 0.0843525 5.3654 0.0843525 4.38909 1.06066L1.58342 3.86634C1.44497 4.00479 1.40007 4.21131 1.46854 4.39474C3.79256 10.6206 8.13045 14.9883 14.4866 17.4149C14.6707 17.4852 14.879 17.4408 15.0184 17.3014L17.8241 14.4957C18.8004 13.5194 18.8004 11.9365 17.8241 10.9602L16.4099 9.54594C15.4336 8.56963 13.8507 8.56963 12.8744 9.54594ZM17.117 11.6673C17.7028 12.2531 17.7028 13.2028 17.117 13.7886L14.542 16.3636C8.72055 14.0584 4.73059 10.0434 2.5194 4.34456L5.0962 1.76777C5.68198 1.18198 6.63173 1.18198 7.21752 1.76777L8.63173 3.18198C9.21752 3.76777 9.21752 4.71752 8.63173 5.3033L7.3978 6.53723C7.21533 6.71971 7.2017 7.01108 7.36634 7.20979C8.66925 8.78233 10.105 10.2191 11.6731 11.5199C11.8718 11.6848 12.1633 11.6712 12.3459 11.4887L13.5815 10.2531C14.1673 9.66726 15.117 9.66726 15.7028 10.2531L17.117 11.6673Z" fill="currentColor"/></g><path fillRule="evenodd" clipRule="evenodd" d="M13 24.5C19.3513 24.5 24.5 19.3513 24.5 13C24.5 6.64873 19.3513 1.5 13 1.5C6.64873 1.5 1.5 6.64873 1.5 13C1.5 19.3513 6.64873 24.5 13 24.5ZM13 25.5C19.9036 25.5 25.5 19.9036 25.5 13C25.5 6.09644 19.9036 0.5 13 0.5C6.09644 0.5 0.5 6.09644 0.5 13C0.5 19.9036 6.09644 25.5 13 25.5Z" fill="currentColor"/></svg> Contato</a>
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
  const menuIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clicarForaMenu = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && menuIconRef.current && !menuIconRef.current.contains(e.target as Node)) {
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

        <Styled.IconeHamburguer toggleMenu={menuAberto} onClick={toggleMenu} ref={menuIconRef}>
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

