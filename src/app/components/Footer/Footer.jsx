import Image from "next/image";
import { Block, Container, Subtext, TextBlock, ContactsBlock, ContactsContainer, Link } from "./Styles";
import biglogo from '../../biglogo.png'
import telegram from '../../telegram.png'
import whatsapp from '../../whatsapp.png'
import upwork from '../../upwork.png'

export default function Footer() {
    return(
        <Container id="footer">
            <Block>
                <TextBlock>
                    <Image src={biglogo}></Image>
                    <Subtext>Shaping Ideas Into Strong Visual Foundations</Subtext>
                </TextBlock>
            </Block>
            <ContactsContainer>
                <div>
                    <h5 style={{fontSize: "24px"}}>Contact</h5>
                    <h6 style={{fontSize: "20px"}}>+48 881 693 482 <br /> priablio69@gmail.com</h6>
                    <ContactsBlock>
                        <Image src={telegram}></Image>
                        <Image src={whatsapp}></Image>
                        <Image src={upwork}></Image>
                    </ContactsBlock>
                </div>
                <div style={{
                    width: "70vw",
                    textAlign: "center",
                    position: "absolute"
                }}>
                    <Link href="/privacypolicy/">Privacy Policy</Link>
                    <h5 style={{
                        display: "inline",
                        padding: "0 10px 0 10px"
                    }}>|</h5>
                    <Link href="/termsofservice/">Terms of Service</Link>
                </div>
            </ContactsContainer>
        </Container>
    )
}