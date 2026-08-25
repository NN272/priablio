import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    margin: 30px 0 0 0;
`

export const Title = styled.h3`
    color: #fff;
    font-size: 55px;
    padding-block-start: 50px;

    @media(max-width: 600px) {
        font-size: 35px;
    }
`

export const SubTitle = styled.h5`
    color: #fff;
    font-size: 24px;

    &:before {
        content: "●";
    }

    &:after {
        content: "●";
    }

    @media(max-width: 600px) {
        font-size: 16px;
    }

`

export const LButton = styled.button`
    margin-left: -150px;
    border: 0px;

    @media(max-width: 800px) {
        display: none;
    }
`

export const RButton = styled.button`
    margin-right: -150px;
    border: 0px;

    
    @media(max-width: 800px) {
        display: none;
    }
`

export const CardContainer = styled.li`
    width: 550px;
    height: 50vh;
    background: #D9D9D9;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    align-content: flex-end;
`

export const Block = styled.div`
    width: 230px;
    height: 70px;
    background: #000;
    margin: 0 20px 20px 0;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const BlockTitle = styled.h6`
    font-size: 20px;
    color: #fff;
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

export const CarouselWrapper = styled.div`
    width: 35vw;

    @media(max-width: 800px) {
        width: 100%;
    }
`