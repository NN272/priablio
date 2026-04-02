import Link from "next/link"
import { Container } from "./Styles"

export default function Header() {
    return (
        <Container>
            <Link style={{padding: "0 50px 0 50px"}} href="#">Home</Link>
            <Link style={{padding: "0 50px 0 50px"}} href="#">Expertise</Link>
            <Link style={{padding: "0 50px 0 50px"}} href="#">Projects</Link>
            <Link style={{padding: "0 50px 0 50px"}} href="#">Start</Link>
            <Link style={{padding: "0 50px 0 50px"}} href="#">Contact</Link>
        </Container>
    )
}