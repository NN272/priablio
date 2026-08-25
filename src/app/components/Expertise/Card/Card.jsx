import Image from "next/image";
import { Block, CardTitle, Img } from "../Styles";

export default function Card(props) {
    return (
        <Block>
            <CardTitle>{props.title}</CardTitle>
            <Img>
            <Image alt="#" src={props.img} style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
            }}></Image>
            </Img>
        </Block>
    )
}