/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  BagContainer,
  BagTxt,
  FavoriteContainer,
  FavoriteIcon,
  FavoriteTxt,
  MainBar,
  MainContainerRigth,
  MainLogo,
  SearchBar,
  SearchButton,
  SearchField,
  SpamNumberBuy,
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
import bag from "../../assets/icons/bolca.svg";
import heart from "../../assets/icons/coracao.svg";

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
          <FavoriteContainer href="#">
            <FavoriteIcon
              src={heart}
              alt="Icone de coração representando área de favoritos."
            />
            <FavoriteTxt>FAVORITOS</FavoriteTxt>
          </FavoriteContainer>
          <BagContainer href="#">
            <div>
              <SpamNumberBuy>
                <span>0</span>
              </SpamNumberBuy>
              <img
                src={bag}
                alt="Icone de sacola representando a sacola de compras do cliente."
              />
            </div>
            <BagTxt>SACOLA</BagTxt>
          </BagContainer>
        </MainContainerRigth>
      </HeadersMarginContainer>
    </MainBar>
  );
};

export default HeaderMain;
