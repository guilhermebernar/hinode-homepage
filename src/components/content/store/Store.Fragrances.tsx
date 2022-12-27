import { useContext } from "react";
import fragances from "../../../assets/jpg/two-perf.jpg";
import { Contexts } from "../../../providers/context";
import CardCarousel from "./defaultSections/Card.Carousel";
import SubTitleProducts from "./defaultSections/SubtitleProductSections";
import {
  ContainerFragBanner,
  ImgFragBanner,
  SeeMoreFragButton,
  SubtitleFragBanner,
  TitleFragBanner,
} from "./Store.Fragances.style";

const Fragrances = () => {
  const { fragproducts1, fragproducts2 }: any = useContext(Contexts);

  return (
    <section>
      <ContainerFragBanner>
        <ImgFragBanner src={fragances} alt="" />
        <div>
          <TitleFragBanner>
            Linha
            <br />
            EMPIRE
          </TitleFragBanner>
          <SubtitleFragBanner>
            Escolha a sua fragrância masculina favorita e desperte as melhores
            sensações.
          </SubtitleFragBanner>
          <SeeMoreFragButton>
            <p>conheça nossos produtos</p>
          </SeeMoreFragButton>
        </div>
      </ContainerFragBanner>
      <SubTitleProducts subtitle={"FRAGRÂNCIAS"} />
      <CardCarousel {...fragproducts1} />
      <CardCarousel {...fragproducts2} />
    </section>
  );
};

export default Fragrances;
