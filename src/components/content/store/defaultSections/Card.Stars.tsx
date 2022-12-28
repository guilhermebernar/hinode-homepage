import fullstar from "../../../../assets/icons/estrela-full.svg";
import semistar from "../../../../assets/icons/estrela-semi.svg";
import { DivStar, StarSize } from "./Card.Stars.style";

const Stars = () => {
  return (
    <DivStar>
      <StarSize src={fullstar} alt="estrela" />
      <StarSize src={fullstar} alt="estrela" />
      <StarSize src={fullstar} alt="estrela" />
      <StarSize src={fullstar} alt="estrela" />
      <StarSize src={semistar} alt="estrela" />
    </DivStar>
  );
};

export default Stars;
