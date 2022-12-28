import {
  InfoBannerContainer,
  InfoDiv,
  InfosMarginContainer,
} from "./Content.InformationBanner.style";
import card from "../../assets/icons/cartao.svg";
import truck from "../../assets/icons/entrega.svg";
import prime from "../../assets/icons/hinode-prime.svg";
import box from "../../assets/icons/box.svg";

const InformationBanner = () => {
  return (
    <InfoBannerContainer>
      <InfosMarginContainer>
        <InfoDiv>
          <img src={card} alt="icone representando promoção" />
          <p>Tudo em até 6x sem juros</p>
        </InfoDiv>
        <InfoDiv>
          <img src={truck} alt="Icone representando frete" />
          <p>FRETE GRÁTIS nas compras acima de R$ 49,00 para todo o Brasil</p>
        </InfoDiv>
        <InfoDiv>
          <img
            src={prime}
            alt="Icone representando troca, referência a hinode prime."
          />
          <p>Hinode Prime: Receba em casa todo mês com 20% OFF</p>
        </InfoDiv>
        <InfoDiv>
          <img
            src={box}
            alt="Simbolo de caixa representando armazenamento ou economia, devido ao frete grátis."
          />
          <p>Garanta mais economia com frete inteligente</p>
        </InfoDiv>
      </InfosMarginContainer>
    </InfoBannerContainer>
  );
};

export default InformationBanner;
