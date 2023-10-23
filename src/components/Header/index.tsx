import * as Styled from "./header.styled";
import Logo from "../../assets/logo.png";
import { HiMenuAlt1 } from "react-icons/hi"

export const Header = () => {
  return (
    <Styled.header>
      <Styled.navbar>
        <Styled.logo>
          <img
            src={Logo}
            alt="Logo da Navy Semi Novos"
          />
        </Styled.logo>
        <HiMenuAlt1 />
      </Styled.navbar>
    </Styled.header>
  );
};