import { Container, MainWrapper, SubTitle, Title, ImageContainer } from "./Styles";
// import main from '../../main.png';
import Image from "next/image";
import logo from '../../logo.png';
import '../../globals.css'

export default function Main() {
    return(
        <Container>
            <MainWrapper>
                <ImageContainer>
                    <Image alt="123" className="mainimg" src={logo}></Image>
                </ImageContainer>
                <div style={{color: "black !important"}}>
                    <Title>PRIABLIO</Title>
                    <SubTitle>VIDEO AI DESIGN</SubTitle>
                </div>
            </MainWrapper>
        </Container>
    )
}