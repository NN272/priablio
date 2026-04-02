import Image from "next/image";
import { Block, Container, LogoContainer, TextBlock, TextContainer, Title } from "./Styles";
import logo from '../../logowhite.png'
import Button from "./Button";

export default function Contact() {
    return (
        <Container id="start">
            <Block>
                <LogoContainer>
                    <Image style={{
                        margin: "40px 0 0 40px"
                    }} src={logo}></Image>
                </LogoContainer>
                <TextContainer>
                    <Title>Let’s work together. <br /> Start your next project with Priablio.</Title>
                    <TextBlock>
                        <Button title="Email Us"></Button>
                        <Button size="400px" title="Connect on Upwork"></Button>
                    </TextBlock>
                </TextContainer>
            </Block>
        </Container>
    )
}