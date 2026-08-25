import { ElementsContainer } from "../Styles";
import Link from "next/link";

export default function MElements() {
    return(
        <ElementsContainer>
            <Link href="/">Home</Link>
            <Link href="#expertise">Expertise</Link>
            <Link href="#carousel">Projects</Link>
            <Link href="#start">Start</Link>
            <Link href="#footer">Contact</Link>
        </ElementsContainer>
    )
}