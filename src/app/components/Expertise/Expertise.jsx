import Card from "./Card/Card";
import { CardsContainer, Container, Title } from "./Styles";
import thumbnail1 from '../../thumbnail1.png'
import thumbnail2 from '../../thumbnail2.png'
import thumbnail3 from '../../thumbnail3.png'
import thumbnail4 from '../../thumbnail4.png'

export default function Expertise() {
    return (
        <Container id="expertise">
            <Title>Priablio Studio Expertise</Title>
            <CardsContainer>
                <Card title="Ai Video Generation" img={thumbnail1}></Card>
                <Card title="Video Editing" img={thumbnail2}></Card>
                <Card title="Content Strategy & Ideation" img={thumbnail3}></Card>
                <Card title="Creative & Visual Design" img={thumbnail4}></Card>
            </CardsContainer>
        </Container>
    )
}