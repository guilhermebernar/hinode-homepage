
import { IProduct } from "../../../../providers/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slider, Slide } from "./index"
import Card from "./Card";
import { useContext } from "react";
import { Contexts } from "../../../../providers/context";
import { MarginToCards } from "./Card.Carousel.style";
import BigCard from "./Card.Big";
import { BigMarginToCards } from "./Card.Big.style";


const BigCardCarousel = (cards:IProduct[]) => {
  
  const listOfCards = Object.values(cards).map(object => object)

  const { BigCardsCarouselSettings }:any  = useContext(Contexts)

  return(
    <BigMarginToCards>
      <Slider settings={BigCardsCarouselSettings}>
        {listOfCards.map((card:IProduct)=>
          <Slide key={card.id}>
              <BigCard card={card}/>
          </Slide>
        )}
      </Slider>
    </BigMarginToCards>
  )
};

export default BigCardCarousel;
