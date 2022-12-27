import { SwiperProps } from "swiper/react";
import { ReactNode } from "react";

export interface IMainCarousel {
  settings: SwiperProps;
  children?: ReactNode;
}
export interface IProduct {
  id: number;
  image: string;
  name: string;
  rating: number;
  price: number;
  previousPrice: number | null;
  sale: number | null,
  department: string,
}

export interface ICardCarousel {
  settings: SwiperProps;
  children: IProduct[];
}
