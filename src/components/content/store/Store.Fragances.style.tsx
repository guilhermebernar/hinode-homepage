import styled from "styled-components";

export const ContainerFragBanner = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(247, 247, 247, 0.4);
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    position: relative;
    left: 60px;
    top: 235px;
  }
`;
export const ImgFragBanner = styled.img`
  height: 868px;
`;
export const TitleFragBanner = styled.h1`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 92.1471px;
  line-height: 92px;
`;
export const SubtitleFragBanner = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 137.69%;
  width: 441px;
  margin-top: 32px;
`;
export const SeeMoreFragButton = styled.button`
  margin-top: 32px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 249px;
  height: 50px;
  background: #000000;
  border: none;
  cursor: pointer;
  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 11.7143px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
  }
`;
