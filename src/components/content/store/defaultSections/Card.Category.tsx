/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import {
  CardCatg,
  ImgCategory,
  MoreInfosView,
} from "../Store.MayBeYourInterest.style";

interface IRenderCategoryCard {
  category: string;
  imagem: string;
}

const CardCategory = ({ category, imagem }: IRenderCategoryCard) => {
  return (
    <CardCatg>
      <ImgCategory src={imagem} alt={category} />
      <MoreInfosView>
        <div>
          <h2>{category}</h2>
          <a href="#">VER MAIS</a>
        </div>
      </MoreInfosView>
    </CardCatg>
  );
};

export default CardCategory;
