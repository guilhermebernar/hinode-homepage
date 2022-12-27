import styled from "styled-components";

export const BigCardContainer = styled.section`
width: 558px;
height: 781px;
margin-top: 50px;
position: relative;
top: -50px;
`
export const BigInfos = styled.div`
width: 222px;
height: 184px;
background: #FFFFFF;
box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
border-radius: 16px;
position: absolute;
margin: 12px 0 0 12px;
padding: 18px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
export const BigImgBackgroud = styled.div`
width: 558px;
height: 781px;
display: flex;
align-items: center;
justify-content: center;
`
export const BigProductImg = styled.img`
width: 558px;
height: 781px;
max-width: 100%;
`
export const BigContainerName = styled.div`
max-width: 267px;
height: 50px;
`
export const BigProductName = styled.span`
font-family: 'Oswald';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 23px;
margin-top: 16px;
`
export const BigPriceTag = styled.span`
margin-top: 12px;
display: flex;
flex-direction: row;
`

export const BigWholePrice = styled.span`
font-family: 'Aktiv Grotesk';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 18px;
color: black;
`;

export const BigFractionPrice = styled.span`
font-family: 'Aktiv Grotesk';
font-style: normal;
font-size: 12px;
font-weight: 700;
top: 20px;
color: black;
`
export const BigBuyButton = styled.button`
margin-top: 12px;
position: absolute;
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background: #FFFFFF;
border-color: #F2994A;
border: 2px solid #F2994A;
width: 268px;
height: 58px;
top: 650px;
cursor: pointer;
p{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 11.7143px;
  line-height: 18px;
  color: #F2994A;
}
`
export const BigMarginToCards = styled.div`
height: 1000px;

.swiper{
  width: 100%;
}

.swiper-slide {
  display:flex;
  justify-content: center;
  width: 100vh;
}

.swiper-pagination-bullet {
  width: 10.5px;
  height: 10.5px;
  border-radius: 50%;
  background: #AA8232;
  border: 1.5px solid #AA8232;
}
.swiper-pagination-bullet-active {
  background-color: #AA8232;
  border-color: #AA8232;
  width: 22.5px;
  height: 12px;
  border-radius: 10px;
}


.swiper-button-prev {
  color: #BDBDBD;;
}

.swiper-button-next {
  color: #BDBDBD;;
}
`