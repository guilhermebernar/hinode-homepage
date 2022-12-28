/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Footerdiv, FooterInfos, FooterMailer, GeneralInfosBanner, IconsContainer, InfoDivs, SocialMediaIcon, TelsDiv } from "./Footer.style"
import footer from "../../assets/jpg/footer.jpg"
import instagram from "../../assets/icons/instagram.svg"
import youtube from "../../assets/icons/youtube.svg"
import facebook from "../../assets/icons/facebook.svg"


const Footer = ()=>{

    return(
        <Footerdiv>
            <FooterMailer>
              <h3>RecebA nossas <br/>ofertas e novidades</h3>
              <form action="send">
                  <input placeholder="Digite seu nome"/>
                  <input placeholder="Digite seu email"/>
                  <button type="submit">Cadastrar</button>
              </form>
            </FooterMailer>
            <FooterInfos>
              <InfoDivs>
                <h4>GRUPO HINODE</h4>
                <a href="#">A Empresa</a>
                <a href="#">Catálogo Hinode</a>
                <a href="#">Seja um Consultor</a>
                <a href="#">Hinode Prime</a>
                <a href="#">Frete Inteligente</a>
              </InfoDivs>
              <InfoDivs>
                <h4>MAIS VENDIDOS</h4>
                  <a href="#">Corps Lígnea Body Contour Gel Modelador</a>
                  <a href="#">Shake de Vanilla H+ HND</a>
                  <a href="#">Shake de Morango H+ HND</a>
                  <a href="#">Luva de Silicone Creme para as Mãos Hands</a>
                  <a href="#">Empire Gold</a>
                  <a href="#">Empire VIP</a>
              </InfoDivs>
              <InfoDivs>
                <h4>DÚVIDAS FREQUENTES</h4>
                  <a href="#">Fale Conosco</a>
                  <a href="#">Entrega, Trocas e Devoluções</a>
                  <a href="#">Compra e Venda</a>
                  <a href="#">Política de Privacidade</a>
                  <a href="#">Remover Consentimento</a>
              </InfoDivs>
              <TelsDiv>
                  <button>CENTRAL DE ATENDIMENTO</button>
                  <p>De segunda a sexta das 9h às 21h 
                    Capitas e regiões metropolitanas 4020-2424 
                    Demais localidades: 0800-144-6633</p>
                  <IconsContainer>
                    <SocialMediaIcon src={instagram} alt="Icone de redirecionamento" />
                    <SocialMediaIcon src={youtube} alt="" />
                    <SocialMediaIcon src={facebook} alt="" />
                  </IconsContainer>
              </TelsDiv>
            </FooterInfos>
            <GeneralInfosBanner src={footer} alt="Informações gerais" />
        </Footerdiv>
    )
}

export default Footer