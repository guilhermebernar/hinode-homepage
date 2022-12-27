import { IProduct } from "../../../../providers/types"
import heart from "../../../../assets/icons/coracao.svg"
import { CardContainer, FavoriteIcon, ImgBackgroud, ProductImg } from "./Card.style";


interface CardProps {
  card: IProduct;
}

const Card = ({card}:CardProps) => {

  return(
    <CardContainer>
      <ImgBackgroud>
        <ProductImg src={card.image} alt={card.name} />
        <FavoriteIcon src={heart} alt="Coração para significar produto favorito" />
      </ImgBackgroud>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </CardContainer>
  )

}

export default Card