import styled from "styled-components";

export const BannerBathSection = styled.section`
width: 100%;
img{
  width: 100%;
}
`
export const TitleBodyAndBath = styled.h1`
display: flex;
/* position: absolute; */
font-family: 'Playfair Display';
font-style: normal;
font-weight: 700;
font-size: 92.1471px;
line-height: 92px;
top: 10px;
color: white;
`
export const SubTitleBodyAndBath = styled.h2`
width: 538px;
height: 99px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 137.69%;
color: #FFFFFF;
margin-top: 8px;

`
export const DivTitle = styled.div`
height: 1px;
display: flex;
position: relative;
flex-direction: column;
top: -700px;
left: 150px;
`
export const SeeMoreButton = styled.button`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 20px 30px;
position: absolute;
width: 249px;
height: 50px;
border: 2px solid var(--white);
background-color: transparent;
cursor: pointer;
top: 320px;

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