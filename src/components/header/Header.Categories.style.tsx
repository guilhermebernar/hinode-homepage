import styled from "styled-components";

export const ContentBar = styled.section`
  display: flex;
  flex-direction: row;
  height: 49px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
export const CategoriesButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    width: 20px;
    height: 16.67px;
    margin-right: 16px;
  }
  p {
    font-family: var(--font-open-sans);
    color: var(--white);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
  }
`;
export const CategoriesContainerRigth = styled.div`
  display: flex;
  width: 729px;
  justify-content: space-between;

  a {
    font-family: var(--font-open-sans);
    color: var(--white);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
  }
`;
