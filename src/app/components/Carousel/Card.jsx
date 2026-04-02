import Image from "next/image";
import { Arrow, Block, BlockTitle, CardContainer } from "./Styles";
import arrow from '../../Arrow.png'

export default function Card () {
    return(
        <CardContainer>
            <Block>
                <BlockTitle>Video Editing</BlockTitle>
                <Arrow><Image src={arrow}></Image></Arrow>
            </Block>
        </CardContainer>
    )
}