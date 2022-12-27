import { useContext } from "react";
import bath from "../../../assets/jpg/woman-relaxing-bath-with-bubbles 1.jpg";
import { Contexts } from "../../../providers/context";
import CardCarousel from "./defaultSections/Card.Carousel";
import SubTitleProducts from "./defaultSections/SubtitleProductSections";
import {
  BannerBathSection,
  DivTitle,
  SeeMoreButton,
  SubTitleBodyAndBath,
  TitleBodyAndBath,
} from "./Store.BodyAndBath.style";
const BodyAndBath = () => {
  const { bathproducts1, bathproducts2 }: any = useContext(Contexts);

  return (
    <>
      <BannerBathSection>
        <img src={bath} alt="Foto de mulher tomando banho em uma banheira" />
        <DivTitle>
          <TitleBodyAndBath>
            Corpo e <br />
            Banho
          </TitleBodyAndBath>
          <SubTitleBodyAndBath>
            Confira nossa linha de produtos para o corpo. Hidratantes, loções e
            desodorantes para os cuidados com seu corpo.
          </SubTitleBodyAndBath>
          <SeeMoreButton>
            <p>conheça nossos produtos</p>
          </SeeMoreButton>
        </DivTitle>
      </BannerBathSection>
      <SubTitleProducts subtitle={"CORPO E BANHO"} />
      <CardCarousel {...bathproducts1} />
      <CardCarousel {...bathproducts2} />
    </>
  );
};

export default BodyAndBath;
