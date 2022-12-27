import Infos from "./Footer.Infos"
import Mailer from "./Footer.Mailer"
import { FooterContainer, Footerdiv } from "./Footer.style"

const Footer = ()=>{

    return(
        <FooterContainer>
            <Footerdiv>FOOTER</Footerdiv>
            <Mailer/>
            <Infos/>
        </FooterContainer>
    )
}

export default Footer