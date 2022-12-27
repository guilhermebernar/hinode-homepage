import { createContext, ReactNode } from "react";
import { SwiperProps } from "swiper/react";
import products from "./api";
import { IProduct } from "./types";

interface IProvider {
  children: ReactNode;
}

export const Contexts = createContext({});

const ContextsProvider = ({ children }: IProvider) => {
  const productsApi: IProduct[] = products;

  const productsBestSale: IProduct[] = productsApi
    .filter((item) => item.id >= 2 && item.id < 6)
    .concat(productsApi.filter((item) => item.id >= 2 && item.id < 6));

  const bigproducts: IProduct[] = productsApi
    .filter((item) => item.id >= 6 && item.id < 8)
    .concat(productsApi.filter((item) => item.id >= 6 && item.id < 8));

  const mostDesiredproducts: IProduct[] = productsApi
    .filter((item) => item.id >= 8 && item.id < 12)
    .concat(productsApi.filter((item) => item.id >= 8 && item.id < 12));

  const healthyLifeproducts: IProduct[] = productsApi
    .filter((item) => item.id >= 12 && item.id < 16)
    .concat(productsApi.filter((item) => item.id >= 12 && item.id < 16));

  const bathproducts1: IProduct[] = productsApi
    .filter((item) => item.id >= 16 && item.id < 20)
    .concat(productsApi.filter((item) => item.id >= 16 && item.id < 20));

  const bathproducts2: IProduct[] = productsApi
    .filter((item) => item.id >= 20 && item.id < 24)
    .concat(productsApi.filter((item) => item.id >= 20 && item.id < 24));

  const fragproducts1: IProduct[] = productsApi
  .filter((item) => item.id >= 24 && item.id < 28)
  .concat(productsApi.filter((item) => item.id >= 24 && item.id < 28));

  const fragproducts2: IProduct[] = productsApi
    .filter((item) => item.id >= 28 && item.id < 32)
    .concat(productsApi.filter((item) => item.id >= 28 && item.id < 32));

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
        healthyLifeproducts,
        bathproducts1,
        bathproducts2,
        fragproducts1,
        fragproducts2,
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
