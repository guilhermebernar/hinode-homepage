import styled from "styled-components";

export const MarginToCards = styled.div`

.swiper{
  width: 100%;
}

.swiper-slide {
  display:flex;
  justify-content: center;
  width: 100vh;
}

.swiper-pagination-bullet {
  width: 10.5px;
  height: 10.5px;
  border-radius: 50%;
  background: #AA8232;
  border: 1.5px solid #AA8232;
}
.swiper-pagination-bullet-active {
  background-color: #AA8232;
  border-color: #AA8232;
  width: 22.5px;
  height: 12px;
  border-radius: 10px;
}


.swiper-button-prev {
  color: #AA8232;
}

.swiper-button-next {
  color: #AA8232;
}
`