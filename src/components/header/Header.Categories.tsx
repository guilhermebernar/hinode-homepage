/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import {
  CategoriesButton,
  CategoriesContainerRigth,
  ContentBar,
} from "./Header.Categories.style";
import menu from "../../assets/png/menu.png";
import { HeadersMarginContainer } from "./Header.style";

const HeaderCategories = () => {
  return (
    <ContentBar>
      <HeadersMarginContainer>
        <CategoriesButton>
          <img src={menu} alt="" />
          <p>Todas as categorias</p>
        </CategoriesButton>
        <CategoriesContainerRigth>
          <a href="#">MAQUIAGEM</a>
          <a href="#">CORPO & BANHO</a>
          <a href="#">VIDA SAUDÁVEL</a>
          <a href="#">ENERGIA E PERFORMANCE</a>
        </CategoriesContainerRigth>
      </HeadersMarginContainer>
    </ContentBar>
  );
};

export default HeaderCategories;
