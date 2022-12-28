import styled from "styled-components";

export const FooterContainer = styled.footer`
width: 100%;
background-color: blue;
height: 840px;
`
export const Footerdiv = styled.div`
width: 100%;
background-color: lightblue;
height: 840px;
`
export const FooterMailer = styled.div`
width: 100%;
height: 152px;
background: #00002D;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
h3{
  font-family: 'Aktiv Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #FFFFFF;
  width: 400px;
}
input{
  background-color: #00002D;
  width: 207;
  border-style: none;
  border-bottom: 1px solid #FFFFFF;
  outline: none;
  margin-right: 21px;
  color: #FFFFFF;
  ::placeholder {
  color: #FFFFFF;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
}
}

button{
  width: 130px;
  height: 48px;
  background: #009BAA;
  color: #FFFFFF;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 11.7143px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  }
`
export const FooterInfos = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 65px 150px 0 150px;
max-width: 100%;
height: 422px;
background: #E1DCD5;

h4, a{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;
  color: #333333;
}
`
export const InfoDivs = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
`

export const TelsDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 230px;
  
  p{
    display: flex;
    justify-content: end;
    margin-bottom: 34px;
  }
  button{
    width: 221px;
    height: 48px;
    left: 1086px;
    top: 223px;
    background: #009BAA;
    border: 2px solid #009BAA;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 11.7143px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 34px;
  }
`

export const GeneralInfosBanner = styled.img`
height: 258px;
width: 104%;
`

export const IconsContainer = styled.div`
width: 221px;
display: flex;
flex-direction: row;
justify-content: end;
`

export const SocialMediaIcon = styled.img`
width: 40px;
height: 40px;
margin-left: 25px;
cursor: pointer;
`
