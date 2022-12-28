/* eslint-disable jsx-a11y/anchor-is-valid */
import { SubTitleStyle } from "./SubtitleProductSections.style";

interface ISubTitle {
  subtitle: string;
}

const SubTitleCategories = (props: ISubTitle) => {
  return (
    <SubTitleStyle>
      <h2>{props.subtitle}</h2>
    </SubTitleStyle>
  );
};

export default SubTitleCategories;
