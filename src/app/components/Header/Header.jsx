import Link from "next/link"
import { Container } from "./Styles"

export default function Header(props) {
    var bg = "transparent";

    if(props.bg) {
        bg = props.bg;
    }

    return (
        <Container style={{background: bg}}>
            <Link style={{padding: "0 50px 0 50px"}} href="/">Home</Link>
            <Link style={{padding: "0 50px 0 50px"}} href="#expertise">Expertise</Link>
            <Link style={{padding: "0 50px 0 50px"}} href="#carousel">Projects</Link>
            <Link style={{padding: "0 50px 0 50px"}} href="#start">Start</Link>
            <Link style={{padding: "0 50px 0 50px"}} href="#footer">Contact</Link>
        </Container>
    )
}