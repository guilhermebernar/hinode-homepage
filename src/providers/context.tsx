import { createContext, ReactNode } from "react";
import { SwiperProps } from "swiper/react"

interface IProvider {
  children: ReactNode;
}

export const Contexts = createContext({});

const ContextsProvider = ({ children }: IProvider) => {

  const MainCrouselSettings:SwiperProps = {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable:true
    }
  }

  return <Contexts.Provider value={{
    MainCrouselSettings
  }}>{children}</Contexts.Provider>;
};

export default ContextsProvider;
