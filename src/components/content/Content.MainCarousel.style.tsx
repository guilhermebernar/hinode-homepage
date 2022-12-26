import styled from "styled-components";

export const CarouselContainer = styled.section`
display: flex;
width: 100%;
height: 770px;
background-color: var(--beige);
`

export const CarouselDiv = styled.div`
width: 100vh;
height: 100%;
position: relative;
`
export const CarouselImg1 = styled.img`
position: absolute;
width: 1203px;
height: 802.92px;
left: -100px;
top: 50px;
`
export const CarouselImg2 = styled.img`
position: absolute;
width: 401px;
height: 401px;
left: -200px;
top: 180px;
`
export const PromotionSlogan = styled.h1`
position: absolute;
width: 513px;
height: 184px;
left: 500px;
top: 260px;
font-family: var(--font-playfair);
font-style: normal;
font-weight: 700;
font-size: 92.1471px;
line-height: 92px;
letter-spacing: -3.54412px;
color: var(--white);
`
export const BuyButton = styled.button`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 20px 30px;
position: absolute;
width: 171px;
height: 50px;
left: 500px;
top: 480px;
border: 2px solid var(--white);
background-color: transparent;
cursor: pointer;

p{
  font-style: normal;
  font-weight: 700;
  font-size: 11.7143px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  color: var(--white);
  flex: none;
  order: 0;
  flex-grow: 0;
}

`