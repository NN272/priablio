import Image from "next/image";
import { Block, CardTitle, Img } from "../Styles";

export default function Card(props) {
    return (
        <Block>
            <CardTitle>{props.title}</CardTitle>
            <Image src={props.img} style={{
                width: "360px",
                height: "205px",
                borderRadius: "10px",
            }}></Image>
        </Block>
    )
}