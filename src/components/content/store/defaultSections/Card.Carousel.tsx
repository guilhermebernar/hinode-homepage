import { IProduct } from "../../../../providers/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slider, Slide } from "./index";
import Card from "./Card";
import { useContext } from "react";
import { Contexts } from "../../../../providers/context";
import { MarginToCards } from "./Card.Carousel.style";

const CardCarousel = (cards: IProduct[]) => {
  const listOfCards = Object.values(cards).map((object) => object);

  const { CardsCarouselSettings }: any = useContext(Contexts);

  return (
    <MarginToCards>
      <Slider settings={CardsCarouselSettings}>
        {listOfCards.map((card: IProduct) => (
          <Slide key={card.id}>
            <Card card={card} />
          </Slide>
        ))}
      </Slider>
    </MarginToCards>
  );
};

export default CardCarousel;
