import styled from "styled-components";

export const Container = styled.div`
    height: 100vh; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("/main.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Title = styled.h2`
    font-size: 96px;
    letter-spacing: 10px;
    margin-block-end: -40px;
    color: #000;

    @media(max-width: 450px) {
        margin-block-end: 0px;
        font-size: 48px;
    }
`

export const SubTitle = styled.h5`
    font-size: 48px;
    letter-spacing: 5px;
    color: #717171;

    @media(max-width: 450px) {
        font-size: 22px;
    }
`

export const MainWrapper = styled.div`
    display: "flex";
    justify-content:"center";
    align-items: "center";

    @media(max-width: 450px) {
        text-align: center;
    }
`

export const ImageContainer = styled.div`
    @medIa(max-width: 450px) {
        display: none;
    }
`