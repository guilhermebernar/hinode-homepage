import { IProduct } from "../../../../providers/types";
import heart from "../../../../assets/icons/coracao.svg";
import {
  BuyButton,
  CardContainer,
  ContainerName,
  FavoriteIcon,
  FractionPrice,
  ImgBackgroud,
  PreviusPricetag,
  PriceTag,
  ProductImg,
  ProductInfos,
  ProductName,
  WholePrice,
} from "./Card.style";
import Stars from "./Card.Stars";

interface CardProps {
  card: IProduct;
}

const Card = ({ card }: CardProps) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(card.price);

  const [whole, fraction] = formattedPrice.split(",");

  return (
    <CardContainer>
      <ImgBackgroud>
        <ProductImg src={card.image} alt={card.name} />
        <FavoriteIcon
          src={heart}
          alt="Coração para significar produto favorito"
        />
      </ImgBackgroud>
      <ProductInfos>
        <ContainerName>
          <ProductName>{card.name}</ProductName>
        </ContainerName>
        <div>
          <Stars />
        </div>
        {card.previousPrice? (
          <PreviusPricetag>{card.previousPrice}</PreviusPricetag>
        ) : (
          <></>
        )}
        <PriceTag>
          <WholePrice>{whole},</WholePrice>
          <FractionPrice>{fraction}</FractionPrice>
        </PriceTag>
        <BuyButton>
          <p>COMPRAR</p>
        </BuyButton>
      </ProductInfos>
    </CardContainer>
  );
};

export default Card;
