import { Container, SubTitle, Title } from "./Styles";
import main from '../../main.png';
import Image from "next/image";
import logo from '../../logo.png';

export default function Main() {
    return(
        <Container>
            <Image alt="" src={main} style={{
                height: "100vh", 
                width: "100%",
                display: "flex",
                justifyContent:"center",
                alignItems: "center",
                position: "absolute",
                zIndex: "-1"
            }}>
            </Image>
            <div style={{
                    display: "flex",
                    justifyContent:"center",
                    alignItems: "center",
                }}>
                <Image alt="" src={logo}></Image>
                <div style={{color: "black !important"}}>
                    <Title>PRIABLIO</Title>
                    <SubTitle>VIDEO AI DESIGN</SubTitle>
                </div>
            </div>
        </Container>
    )
}