import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80vh;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`

export const Block = styled.div`
    width: 60vw;
    height: 600px;
    background: #000;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    @media(max-width: 1025px) {
        width: 90vw;
    }

`

export const LogoContainer = styled.div`
    width: 100%;

    @media(max-width: 450px) {
        display: none;
    }
`

export const TextContainer = styled.div`
    text-align: center;
    width: 80%;
    height: 65%;

    @media(max-width: 800px) {
        text-align: unset;
    }
`

export const Title = styled.h3`
    color: #fff;
    font-size: 48px;

    @media(max-width: 800px) {
        font-size: 35px;
        margin: 100px 0 0 0;
    }
`

export const ButtonContainer = styled.div`
    height: 70px;
    background: #3D81FF;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media(max-width: 800px) {
        margin: 10px 0 0 0;
    }
`

export const ButtonTitle = styled.h6`
    font-size: 28px;
    color: #000;

    @media(max-width: 1025px) {
        font-size: 20px;
    }
`

export const Arrow = styled.div`
    width: 45px;
    height: 45px;
    background: #D9D9D9;
    border-radius: 100px;
    margin: 0 0 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    margin: 50px;

    @media(max-width: 800px) {
        display: block;
        margin: 0px;
    }
`