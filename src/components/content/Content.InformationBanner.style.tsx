import styled from "styled-components";

export const InfoBannerContainer = styled.section`
display: flex;
justify-content: center;
width: 1440px;
margin-top: 20px;
height: 117px;
background-color: var(--grey-second);
`
export const InfosMarginContainer = styled.div`
display: flex;
flex-direction: row;
margin: 0 150px 0 150px;
width: 100%;
justify-content: space-between;
align-items:center;
`
export const InfoDiv = styled.div`
display: flex;
justify-content:space-between;
align-items: center;

p{
  max-width: 227px;
  height: 46px;
  font-family: var(--font-open-sans);
  color: var(--grey-sixth);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  break-inside: auto;
  display: flex;
  align-items: center;
  margin-left: 15px;
}
`