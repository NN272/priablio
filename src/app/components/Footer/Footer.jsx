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
                    <Image alt="#" src={biglogo}></Image>
                    <Subtext>Shaping Ideas Into Strong Visual Foundations</Subtext>
                </TextBlock>
            </Block>
            <ContactsContainer>
                <div>
                    <h5 style={{fontSize: "24px"}}>Contact</h5>
                    <h6 style={{fontSize: "20px"}}>+48 881 693 482 <br /> priablio69@gmail.com</h6>
                    <ContactsBlock>
                        <Image alt="#" src={telegram}></Image>
                        <Image alt="#" src={whatsapp}></Image>
                        <Image alt="#" src={upwork}></Image>
                    </ContactsBlock>
                </div>
                <div style={{
                    width: "70vw"
                }}>
                </div>
            </ContactsContainer>
                <div style={{
                    width: "100%",
                    textAlign: "center",
                    margin: "30px 0 0 0"
                }}>
                    <Link href="/privacypolicy/">Privacy Policy</Link>
                    <h5 style={{
                        display: "inline",
                        padding: "0 10px 0 10px"
                    }}>|</h5>
                    <Link href="/termsofservice/">Terms of Service</Link>
                </div>
        </Container>
    )
}