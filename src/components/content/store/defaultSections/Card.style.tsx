import styled from "styled-components";

export const CardContainer = styled.section`
  height: 519px;
  width: 266px;
  margin-top: 50px;
`;
export const ImgBackgroud = styled.div`
  width: 266px;
  height: 311px;
  background-color: var(--grey-fifth);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProductImg = styled.img`
  position: relative;
  max-width: 100%;
`;
export const FavoriteIcon = styled.img`
  position: absolute;
  top: 75px;
  right: 100px;
`;
export const ContainerName = styled.div`
  max-width: 267px;
  max-height: 50px;
`;

export const PreviusPricetag = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  text-decoration-line: line-through;
  color: #828282;
`;

export const ProductInfos = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.span`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  margin-top: 16px;
`;
export const PriceTag = styled.span`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
`;

export const WholePrice = styled.span`
  font-family: "Aktiv Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 18px;
  color: black;
`;

export const FractionPrice = styled.span`
  font-family: "Aktiv Grotesk";
  font-style: normal;
  font-size: 12px;
  font-weight: 700;
  top: 20px;
  color: black;
`;
export const BuyButton = styled.a`
  :hover {
    background-color: #f2994a;
    p {
      color: #ffffff;
    }
  }
  margin-top: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-color: #f2994a;
  border: 2px solid #f2994a;
  width: 268px;
  height: 58px;
  cursor: pointer;
  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 11.7143px;
    line-height: 18px;
    color: #f2994a;
  }
`;
