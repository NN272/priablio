import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    color: #000;
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

export const Title = styled.h3`
    color: #000;
    font-size: 55px;
    padding-block-start: 30px;
    margin-block-end: 20px;

    @media(max-width: 600px) {
        font-size: 30px;
    }
`

export const Block = styled.div`
    width: 550px;
    height: 325px;
    background: #D9D9D9;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 5px;
`

export const CardTitle = styled.h5`
    font-size: 36px;
    padding-block-start: 20px;

    @media(max-width: 600px) {
        font-size: 24px;
    }
`

export const Img = styled.div`
    width: 80%;
    height: 65%;
    background: #000;
    border-radius: 10px;
`

export const CardsContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width: 450px) {
        width: 100%;
    }
`