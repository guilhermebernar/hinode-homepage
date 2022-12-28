import styled from "styled-components";

export const SectionCategory = styled.section`
  width: 1420px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32.75px;
  margin-bottom: 117px;
  padding: 0 150px 0 150px;
`;

export const CardCatg = styled.div`
  width: 267px;
  height: 540px;
  overflow: hidden;
`;

export const ImgCategory = styled.img`
  height: 540px;
  width: 100%;
`;
export const MoreInfosView = styled.div`
  :hover {
    transition: all 2s;
    transform: translateY(-250px);
    height: 100%;
    background: linear-gradient(
      181.19deg,
      rgba(0, 0, 0, 0) 0.02%,
      rgba(0, 0, 0, 0.534) 28.75%,
      rgba(0, 0, 0, 0.849) 67.96%,
      rgb(0, 0, 0) 101.26%
    );
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: -70px;
    h2 {
      font-family: "Oswald";
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 68px;
      color: #ffffff;
    }
    a {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 15.4839px;
      line-height: 21px;
      color: #ffffff;
      text-decoration-line: underline;
    }
  }
`;
