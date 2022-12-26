/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  InstitutionalContainerRigth,
  InstitutionalBar,
  LinkAEmpresa,
  LinkFaleConosco,
  LinkSejaUmConsultor,
} from "./Header.Institutional.style";
import areadocliente from "../../assets/icons/cliente.svg";
import { HeadersMarginContainer } from "./Header.style";

const HeaderInstitutional = () => {
  return (
    <InstitutionalBar>
      <HeadersMarginContainer>
        <LinkAEmpresa href="#">A empresa</LinkAEmpresa>
        <InstitutionalContainerRigth>
          <LinkSejaUmConsultor href="#">
            <img
              src={areadocliente}
              alt="icone reprezentando área do cliente"
            />
            <p>Seja um consultor</p>
          </LinkSejaUmConsultor>
          <LinkFaleConosco href="#">Fale Conosco</LinkFaleConosco>
        </InstitutionalContainerRigth>
      </HeadersMarginContainer>
    </InstitutionalBar>
  );
};

export default HeaderInstitutional;
