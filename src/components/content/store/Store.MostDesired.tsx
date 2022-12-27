import { useContext } from "react"
import { Contexts } from "../../../providers/context"
import CardCarousel from "./defaultSections/Card.Carousel"
import SubTitleProducts from "./defaultSections/SubtitleProductSections"

const MostDesired = ()=>{

    const {mostDesiredproducts}:any  = useContext(Contexts)

    return(
        <section>
          <SubTitleProducts subtitle={"OS MAIS DESEJADOS"}/>
          <CardCarousel {...mostDesiredproducts}/>
        </section>
    )
}

export default MostDesired