import styled from "styled-components";

export const MarginToCards = styled.div`
  .swiper {
    width: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    width: 100vh;
  }

  .swiper-pagination-bullet {
    width: 10.5px;
    height: 10.5px;
    border-radius: 50%;
    background: #aa8232;
    border: 1.5px solid #aa8232;
  }
  .swiper-pagination-bullet-active {
    background-color: #aa8232;
    border-color: #aa8232;
    width: 22.5px;
    height: 12px;
    border-radius: 10px;
  }

  .swiper-button-prev {
    color: #bdbdbd;
  }

  .swiper-button-next {
    color: #bdbdbd;
  }
`;
