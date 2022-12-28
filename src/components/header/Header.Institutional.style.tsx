import styled from "styled-components";

export const InstitutionalBar = styled.section`
  background-color: var(--grey-first);
  height: 37px;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const LinkAEmpresa = styled.a`
  font-family: var(--font-open-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 22px;
  color: var(--grey-sixth);
`;

export const LinkSejaUmConsultor = styled.a`
  display: flex;
  flex-direction: row;
  font-family: var(--font-open-sans);
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 22px;
  color: var(--grey-sixth);
`;

export const LinkFaleConosco = styled.a`
  font-family: var(--font-open-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 22px;
  color: var(--grey-sixth);
`;
export const InstitutionalContainerRigth = styled.div`
  display: flex;
  flex-direction: row;
  img {
    margin-right: 8.55px;
  }
  p {
    margin-right: 32px;
    text-decoration: underline;
  }
`;
