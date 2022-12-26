/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  MainBar,
  MainContainerRigth,
  MainLogo,
  SearchBar,
  SearchButton,
  SearchField,
  VisitorContainer,
  VisitorIcon,
  VisitorsButton,
  VisitorTxt01,
  VisitorTxt02,
} from "./Header.Main.styles";
import { HeadersMarginContainer } from "./Header.style";
import logo from "../../assets/logo-color.svg";
import search from "../../assets/icons/lupa.svg";
import person from "../../assets/icons/person.svg";

const HeaderMain = () => {
  return (
    <MainBar>
      <HeadersMarginContainer>
        <MainLogo src={logo} alt="Logo do Grupo Hinode" />
        <MainContainerRigth>
          <SearchBar>
            <SearchField
              type="text"
              placeholder="  Busque aqui o produto de seu interesse"
            />
            <SearchButton type="submit">
              <img
                src={search}
                alt="Botão em forma de lupa do campo de pesquisa"
              />
            </SearchButton>
          </SearchBar>
          <VisitorContainer href="#">
            <VisitorIcon 
              src={person} 
              alt="Icone reprensentando uma pessoa ao lado de botão de área do cliente."
            />
            <VisitorsButton>
              <VisitorTxt01>Olá visitante,</VisitorTxt01>
              <VisitorTxt02>ENTRE OU CADASTRE-SE</VisitorTxt02>
            </VisitorsButton>
          </VisitorContainer>
        </MainContainerRigth>
      </HeadersMarginContainer>
    </MainBar>
  );
};

export default HeaderMain;
