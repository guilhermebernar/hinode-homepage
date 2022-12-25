import HeaderCategories from "./Header.Categories"
import HeaderInstitutional from "./Header.Institutional"
import HeaderMain from "./Header.Main"

const Header = ()=>{

    return(
        <header>
            <HeaderInstitutional/>
            <HeaderMain/>
            <HeaderCategories/>
        </header>
    )
}

export default Header