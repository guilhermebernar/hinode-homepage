import styled from "styled-components";

export const MainBar = styled.section`
background-color: var(--white);
height: 90px;
width: 100%;
display: flex;
align-items: center;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
`
export const MainLogo = styled.img`
height: 45px;
width: 216px;
`
export const MainContainerRigth = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

export const SearchBar = styled.form`
display: flex;
flex-direction: row;
width: 399px;
height: 37px;
position: relative;
align-items: center;
`
export const SearchField = styled.input`
width: 399px;
height: 37px;
background-color: var(--grey-fourth);
border-radius: 100px;
opacity: 0.5;
border-color: var(--grey-fourth);
border-style: solid;
`
export const SearchButton = styled.button`
position: absolute;
align-items: center;
top: 50%;
transform: translateY(-50%);
right: 10px;
background-color: transparent;border-style: none;
cursor: pointer;
img{
  height: 17.77px;
  width: 17.77px;
}
`
export const VisitorContainer = styled.a`
display: flex;
flex-direction: row;
`
export const VisitorIcon = styled.img`
max-width: 16px;
max-height: 21px;
margin: 0 7px 0 26px;
`
export const VisitorsButton = styled.div`
display: flex;
flex-direction: column;
`
export const VisitorTxt01 = styled.a`
font-family: var(--font-open-sans);
font-style: normal;
font-weight: 600;
font-size: 9px;
line-height: 22px;
color: var(--grey-sixth);
margin-top: -8%;
margin-bottom: -8%;
`
export const VisitorTxt02 = styled.a`
font-family: var(--font-open-sans);
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 22px;
color: var(--grey-sixth);
`
export const FavoriteContainer = styled.a`
display: flex;
flex-direction: row;
justify-content: center;
`
export const FavoriteIcon = styled.img`
width: 16px;
height: 21px;
margin: 0 7px 0 26px;
`
export const FavoriteTxt = styled.p`
font-family: var(--font-open-sans);
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 22px;
color: var(--grey-sixth);
`
export const BagContainer = styled.a`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-left: 41px;
`
export const SpamNumberBuy = styled.div`
background-color: var(--red);
height: 14px;
width: 14px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
transform: translateY(-50%);
transform: translateX(-30%);

span{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 22px;
  color: var(--white)
}
`
export const BagTxt = styled.p`
font-family: var(--font-open-sans);
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 22px;
color: var(--grey-sixth);
margin-left: 11px;
`