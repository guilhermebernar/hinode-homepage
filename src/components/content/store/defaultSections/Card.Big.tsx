import { IProduct } from "../../../../providers/types";
import {
  BigBuyButton,
  BigCardContainer,
  BigContainerName,
  BigFractionPrice,
  BigImgBackgroud,
  BigInfos,
  BigPriceTag,
  BigProductImg,
  BigProductName,
  BigWholePrice,
} from "./Card.Big.style";
import Stars from "./Card.Stars";

interface CardProps {
  card: IProduct;
}

const BigCard = ({ card }: CardProps) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(card.price);

  const [whole, fraction] = formattedPrice.split(",");

  return (
    <BigCardContainer>
      <BigInfos>
        <BigContainerName>
          <BigProductName>{card.name}</BigProductName>
        </BigContainerName>
        <div>
          <Stars />
        </div>
        <BigPriceTag>
          <BigWholePrice>{whole},</BigWholePrice>
          <BigFractionPrice>{fraction}</BigFractionPrice>
        </BigPriceTag>
      </BigInfos>
      <BigImgBackgroud>
        <BigProductImg src={card.image} alt={card.name} />
        <BigBuyButton>
          <p>COMPRAR</p>
        </BigBuyButton>
      </BigImgBackgroud>
    </BigCardContainer>
  );
};

export default BigCard;
