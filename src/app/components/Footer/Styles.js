import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #3D81FF;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`

export const Block = styled.div`
    width: 70vw;
    heigth: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: center;
`

export const TextBlock = styled.div`
    text-align:center;
    position: relative;
    top: 100px;
`

export const Subtext = styled.h6`
    font-size: 20px;
    color: #fff;
    margin-block-start: 20px;
`

export const ContactsBlock = styled.div`
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin: 20px 0 0 0;
`

export const ContactsContainer = styled.div`
    height: 50vh;
    width: 70vw;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`

export const Link = styled.a`
    color: #fff;
    font-size: 20px;
    text-decoration: none;
`