import BestSellers from "./Content.BestSellers"
import BodyAndBath from "./Content.BodyAndBath"
import Fragrances from "./Content.Fragrances"
import HealthyLife from "./Content.HealthyLife"
import InformationBanner from "./Content.InformationBanner"
import MainCarousel from "./Content.MainCarousel"
import MayBeYourInterest from "./Content.MayBeYourInterest"
import MostDesired from "./Content.MostDesired"

const Content = ()=>{

    return(
        <section>   
            <MainCarousel/>
            <InformationBanner/>
            <BestSellers/>
            <MayBeYourInterest/>
            <MostDesired/>
            <HealthyLife/>
            <BodyAndBath/>
            <Fragrances/>
        </section>
    )
}

export default Content