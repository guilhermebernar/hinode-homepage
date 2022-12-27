import { useContext } from "react"
import { Contexts } from "../../../providers/context"
import CardCarousel from "./defaultSections/Card.Carousel"
import SubTitleProducts from "./defaultSections/SubtitleProductSections"
import { BestSellersContainer } from "./Store.BestSellers.style"
// import { ICardCarousel } from "../../../providers/types";



const BestSellers = () =>{

  const {productsBestSale}:any  = useContext(Contexts)
  
    return(
        <BestSellersContainer>
          <SubTitleProducts subtitle={"MAIS VENDIDOS"}/>
          <CardCarousel {...productsBestSale}/>
        </BestSellersContainer>
    )
}

export default BestSellers