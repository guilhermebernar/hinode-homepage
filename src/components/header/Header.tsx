import HeaderCategories from "./Header.Categories"
import HeaderInstitutional from "./Header.Institutional"
import HeaderMain from "./Header.Main"
import { HeaderStyle } from "./Header.style"

const Header = ()=>{
  return(
    <HeaderStyle>
      <HeaderInstitutional/>
      <HeaderMain/>
      <HeaderCategories/>
    </HeaderStyle>
  )
}

export default Header