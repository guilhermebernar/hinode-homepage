/* eslint-disable jsx-a11y/anchor-is-valid */
import openeye from "../../../../assets/icons/olho.svg";
import { SeeMoreSection, SubTitleStyle } from "./SubtitleProductSections.style";

interface ISubTitle {
  subtitle: string;
}

const SubTitleProducts = (props: ISubTitle) => {
  return (
    <SubTitleStyle>
      <h2>{props.subtitle}</h2>
      <SeeMoreSection href="#">
        <img src={openeye} alt="Olho que representa o veja mais." />
        <p>Ver Todos</p>
      </SeeMoreSection>
    </SubTitleStyle>
  );
};

export default SubTitleProducts;
