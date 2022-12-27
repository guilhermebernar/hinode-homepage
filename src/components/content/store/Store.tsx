import MayBeYourInterest from "./Store.MayBeYourInterest"
import BestSellers from "./Store.BestSellers"
import BodyAndBath from "./Store.BodyAndBath"
import Fragrances from "./Store.Fragrances"
import HealthyLife from "./Store.HealthyLife"
import MostDesired from "./Store.MostDesired"

const Store = ()=> {
  
  return(
    <>
      <BestSellers />
      <MayBeYourInterest />
      <MostDesired />
      <HealthyLife />
      <BodyAndBath />
      <Fragrances />
    </>
  )
}

export default Store