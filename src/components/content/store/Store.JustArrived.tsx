import { useContext } from "react"
import { Contexts } from "../../../providers/context"
import CardCarousel from "./defaultSections/Card.Carousel"
import SubTitleProducts from "./defaultSections/SubtitleProductSections"
import { SectionJustArrived } from "./Store.JustArrived.style"

const JustArrived = ()=>{

  const {justproducts1}:any  = useContext(Contexts)

    return(
      
        <SectionJustArrived>
          <SubTitleProducts subtitle={"ACABARAM DE CHEGAR"}/>
          <CardCarousel {...justproducts1}/>
        </SectionJustArrived>
    )
}

export default JustArrived