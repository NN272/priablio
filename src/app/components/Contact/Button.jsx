import { ButtonContainer, ButtonTitle, Arrow } from "./Styles";
import arrow from '../../Arrow.png'
import Image from "next/image";

export default function Button(props) {
    var size = "";

    if(props.size) {
        size = props.size;
    } else {
        size = "200px";
    }

    return (
        <ButtonContainer style={{
            width: size
        }}>
            <ButtonTitle>{props.title}</ButtonTitle>
            <Arrow><Image alt="#" src={arrow}></Image></Arrow>
        </ButtonContainer>
    )
}