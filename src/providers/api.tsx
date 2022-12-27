// import axios from 'axios';
import { IProduct } from "./types"

// const api = axios.create({
//   baseURL: '',
//   timeout: 5000,
// });

// export default api;

const products: Array<IProduct> = [
  {
    id: 1,
    image: "/assets/png/1.png",
    name: "Base Líquida DAZZLE",
    rating: 4,
    price: 89.9,
    previousPrice: null,
    sale: null,
    department: "showcase",
  },
  {
    id: 2,
    image: "/assets/png/2.png",
    name: "Esponja 3D Dazzle",
    rating: 4,
    price: 29.9,
    previousPrice: 36.9,
    sale: null,
    department: "most-selled",
  },
  {
    id: 3,
    image: "/assets/png/3.png",
    name: "Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g",
    rating: 4,
    price: 89.9,
    previousPrice: null,
    sale: null,
    department: "most-selled",
  },
  {
    id: 4,
    image: "/assets/png/4.png",
    name: "Grace La Rose Sublime Deo Colônia Pocket 15ml",
    rating: 4,
    price: 39.9,
    previousPrice: null,
    sale: null,
    department: "most-selled",
  },
  {
    id: 5,
    image: "/assets/png/5.png",
    name: "Pó Compacto HD Cover Claro 2 Dazzle - 12g",
    rating: 4,
    price: 46.9,
    previousPrice: null,
    sale: null,
    department: "most-selled",
  },
  {
    id: 6,
    image: "/assets/png/6.png",
    name: "Venyx L’Or 100ml",
    rating: 5,
    price: 150,
    previousPrice: null,
    sale: null,
    department: "highlights",
  },
  {
    id: 7,
    image: "/assets/png/7.png",
    name: "Multi- Vit Complex A-Z Mulheres 60 Cápsulas",
    rating: 5,
    price: 85,
    previousPrice: null,
    sale: null,
    department: "highlights",
  },
  {
    id: 8,
    image: "/assets/png/8.png",
    name: "Corps Lígnea Body Contour Gel Modelador 500g",
    rating: 4,
    price: 60,
    previousPrice: null,
    sale: null,
    department: "most-desired",
  },
  {
    id: 9,
    image: "/assets/png/9.png",
    name: "Shake de Baunilha H+ HND - 550g",
    rating: 4,
    price: 79.9,
    previousPrice: null,
    sale: 0.2,
    department: "most-desired",
  },
  {
    id: 10,
    image: "/assets/png/10.png",
    name: "Shake de Morango H+ HND - 550g",
    rating: 4,
    price: 79.9,
    previousPrice: null,
    sale: 0.2,
    department: "most-desired",
  },
  {
    id: 11,
    image: "/assets/png/11.png",
    name: "Luva de Silicone Creme para as Mãos Hands 100g",
    rating: 4,
    price: 25,
    previousPrice: null,
    sale: null,
    department: "most-desired",
  },
  {
    id: 12,
    image: "/assets/png/12.png",
    name: "Café Verde 120 cápsulas",
    rating: 4,
    price: 69.9,
    previousPrice: null,
    sale: null,
    department: "healthy-life",
  },
  {
    id: 13,
    image: "/assets/png/13.png",
    name: "Ácido Hialurônico com Colágeno HND 30 Sachês de 4g",
    rating: 4,
    price: 175,
    previousPrice: null,
    sale: null,
    department: "healthy-life",
  },
  {
    id: 14,
    image: "/assets/png/14.png",
    name: "Slim Max HND 120 Cápsulas",
    rating: 4,
    price: 140,
    previousPrice: null,
    sale: null,
    department: "healthy-life",
  },
  {
    id: 15,
    image: "/assets/png/15.png",
    name: "Chá H+ Frutas Vermelhas 150g",
    rating: 4,
    price: 85,
    previousPrice: null,
    sale: null,
    department: "healthy-life",
  },
  {
    id: 16,
    image: "/assets/png/16.png",
    name: "Corps Lígnea Wonderful Gold Óleo para as Pernas - 150ml",
    rating: 4,
    price: 45,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 17,
    image: "/assets/png/17.png",
    name: "Corps Lígnea Body Contour Esfoliante Corporal - 200g",
    rating: 4,
    price: 49,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 18,
    image: "/assets/png/18.png",
    name: "Gel para Massagem Feelin Hot Morango 60ml",
    rating: 4,
    price: 27,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 19,
    image: "/assets/png/19.png",
    name: "Óleo para as Pernas Wonderful 140ml",
    rating: 4,
    price: 39.9,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 20,
    image: "/assets/png/20.png",
    name: "Corps Lígnea Body Contour Gel Modelador 500g",
    rating: 4,
    price: 60,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 21,
    image: "/assets/png/21.png",
    name: "Corps Lígnea Body Contour Gel Modelador 500g",
    rating: 4,
    price: 60,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 22,
    image: "/assets/png/22.png",
    name: "Corps Lígnea Body Contour Gel Modelador 500g",
    rating: 4,
    price: 60,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 23,
    image: "/assets/png/23.png",
    name: "Corps Lígnea Body Contour Gel Modelador 500g",
    rating: 4,
    price: 60,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 24,
    image: "/assets/png/24.png",
    name: "Lattitude Expedition 100ML",
    rating: 4,
    price: 129,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 25,
    image: "/assets/png/25.png",
    name: "Empire VIP 100ml",
    rating: 4,
    price: 150,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 26,
    image: "/assets/png/26.png",
    name: "Empire 100ml",
    rating: 4,
    price: 150,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 27,
    image: "/assets/png/27.png",
    name: "Lattitude Stamina 100ml",
    rating: 4,
    price: 129,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 28,
    image: "/assets/png/28.png",
    name: "Empire Gold 100ml",
    rating: 4,
    price: 150,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 29,
    image: "/assets/png/29.png",
    name: "Colônia Lattitude Origini 100ml",
    rating: 4,
    price: 129,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 30,
    image: "/assets/png/30.png",
    name: "Colônia Ella Juicy 100ml",
    rating: 4,
    price: 129,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 31,
    image: "/assets/png/31.png",
    name: "Spot For Her 75ml",
    rating: 4,
    price: 129,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 32,
    image: "/assets/png/32.png",
    name: "Deo Colônia Venyx L’Or 100ml",
    rating: 4,
    price: 150,
    previousPrice: null,
    sale: null,
    department: "arrived-now",
  },
  {
    id: 33,
    image: "/assets/png/33.png",
    name: "Desodorante Roll On Dynamic",
    rating: 4,
    price: 17.9,
    previousPrice: null,
    sale: null,
    department: "arrived-now",
  },
  {
    id: 34,
    image: "/assets/png/34.png",
    name: "Erva Doce Sabonete Cremoso Facial Hinode 250ml",
    rating: 4,
    price: 33.4,
    previousPrice: null,
    sale: null,
    department: "arrived-now",
  },
  {
    id: 35,
    image: "/assets/png/35.png",
    name: "HND Shake Triple Chocolate 450g",
    rating: 4,
    price: 109.9,
    previousPrice: null,
    sale: null,
    department: "arrived-now",
  },
];

export default products;