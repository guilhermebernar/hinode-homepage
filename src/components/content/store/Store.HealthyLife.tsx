import { useContext } from "react"
import { Contexts } from "../../../providers/context"
import CardCarousel from "./defaultSections/Card.Carousel"
import SubTitleProducts from "./defaultSections/SubtitleProductSections"

const HealthyLife = ()=>{

  const {healthyLifeproducts}:any  = useContext(Contexts)

    return(
        <section>
          <SubTitleProducts subtitle={"VIDA SAUDÁVEL"}/>
          <CardCarousel {...healthyLifeproducts}/>
        </section>
    )
}

export default HealthyLife