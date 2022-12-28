import MayBeYourInterest from "./Store.MayBeYourInterest";
import BestSellers from "./Store.BestSellers";
import BodyAndBath from "./Store.BodyAndBath";
import Fragrances from "./Store.Fragrances";
import HealthyLife from "./Store.HealthyLife";
import MostDesired from "./Store.MostDesired";
import JustArrived from "./Store.JustArrived";

const Store = () => {
  return (
    <>
      <BestSellers />
      <MayBeYourInterest />
      <MostDesired />
      <HealthyLife />
      <BodyAndBath />
      <Fragrances />
      <JustArrived />
    </>
  );
};

export default Store;
