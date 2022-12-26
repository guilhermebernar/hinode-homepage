import woman from "../../assets/png/woman.png";
import make from "../../assets/png/image 152.png"
import { BuyButton, CarouselContainer, CarouselDiv, CarouselImg1, CarouselImg2, PromotionSlogan } from "./Content.MainCarousel.style";
import { Swiper, SwiperProps,SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/swiper.css";

interface IMainCarousel {
  settings: SwiperProps;
  // children: ReactNode;
}

const MainCarousel = ({ settings }: IMainCarousel) => {
  return (
    <CarouselContainer>
      <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
          <SwiperSlide>
            <CarouselDiv>
              <CarouselImg1 src={woman} alt="Mulher se maquiando."/>
              <CarouselImg2 src={make} alt="maquiagem"/>
              <PromotionSlogan>
                Base Líquida DAZZLE
              </PromotionSlogan>
              <BuyButton>
                <p>COMPRAR</p>
              </BuyButton>
            </CarouselDiv>
          </SwiperSlide>
          <SwiperSlide>Banner 2</SwiperSlide>
          <SwiperSlide>Banner 3</SwiperSlide>
      </Swiper>
    </CarouselContainer>
  );
};

export default MainCarousel;
