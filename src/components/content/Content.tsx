import { useContext } from "react";
import { Contexts } from "../../providers/context";
import InformationBanner from "./Content.InformationBanner";
import MainCarousel from "./Content.MainCarousel";
import { ContentMainSection } from "./Content.style";
import Store from "./store/Store";

const Content = () => {
  const { MainCarouselSettings }: any = useContext(Contexts);

  return (
    <ContentMainSection>
      <MainCarousel settings={MainCarouselSettings} />
      <InformationBanner />
      <Store />
    </ContentMainSection>
  );
};

export default Content;
