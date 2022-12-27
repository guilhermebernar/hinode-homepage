import { createContext, ReactNode } from "react";
import { SwiperProps } from "swiper/react";
import products from "./api";
import { IProduct } from "./types";

interface IProvider {
  children: ReactNode;
}

export const Contexts = createContext({});

const ContextsProvider = ({ children }: IProvider) => {
  const productsApi:IProduct[] = products;

  const productsBestSale:IProduct[] = productsApi.filter((item) => item.id >= 2 && item.id < 6).concat(productsApi.filter((item) => item.id >= 2 && item.id < 6));

  const bigproducts:IProduct[] = productsApi.filter((item) => item.id >= 6 && item.id < 8).concat(productsApi.filter((item) => item.id >= 6 && item.id < 8));  

  const mostDesiredproducts:IProduct[] = productsApi.filter((item) => item.id >= 8 && item.id < 12).concat(productsApi.filter((item) => item.id >= 8 && item.id < 12));  
  
  const MainCarouselSettings: SwiperProps = {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

  const CardsCarouselSettings: SwiperProps = {
    spaceBetween: -70,
    slidesPerView: 4,
    navigation: true,
    pagination: {
      clickable: true,
    },
    
  };

  const BigCardsCarouselSettings: SwiperProps = {
    spaceBetween: -50,
    slidesPerView: 2,
    navigation: true,
    pagination: {
      clickable: true,
    },
    
  };

  return (
    <Contexts.Provider
      value={{
        bigproducts,
        MainCarouselSettings,
        mostDesiredproducts,
        CardsCarouselSettings,
        productsApi,
        productsBestSale,
        BigCardsCarouselSettings,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export default ContextsProvider;
