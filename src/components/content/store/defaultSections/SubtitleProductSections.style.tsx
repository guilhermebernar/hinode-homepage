import styled from "styled-components";

export const SubTitleStyle =  styled.section`
width: 1440px;
display: flex;
justify-content: center;
flex-direction: column;
position: relative;
justify-content: center;
align-items: center;
margin-top: 30px;
h2{
  font-family: var(--font-oswald);
  font-style: normal;
  font-weight: 300;
  font-size: 46px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
}
`
export const SeeMoreSection = styled.a`
position: absolute;
font-family: var(--font);
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 22px;
display: flex;
flex-direction: row;
align-items: center;
text-align: right;
text-decoration-line:underline;
top: 40px;
right: 160px;
p{
  font-family: var(--font-open-sans);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: right;
  text-decoration-line: underline;
  color: var(--grey-sixth);
  margin-left: 5px;
}
`