import { useContext } from "react";
import { Contexts } from "../../providers/context";
import BestSellers from "./Content.BestSellers";
import BodyAndBath from "./Content.BodyAndBath";
import Fragrances from "./Content.Fragrances";
import HealthyLife from "./Content.HealthyLife";
import InformationBanner from "./Content.InformationBanner";
import MainCarousel from "./Content.MainCarousel";
import MayBeYourInterest from "./Content.MayBeYourInterest";
import MostDesired from "./Content.MostDesired";
import { ContentMainSection } from "./Content.style";

const Content = () => {
  const { MainCrouselSettings }: any = useContext(Contexts);

  return (
    <ContentMainSection>
      <MainCarousel settings={MainCrouselSettings}/>
      <InformationBanner />
      <BestSellers />
      <MayBeYourInterest />
      <MostDesired />
      <HealthyLife />
      <BodyAndBath />
      <Fragrances />
    </ContentMainSection>
  );
};

export default Content;
