import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    z-index: 2;
    position: absolute;
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media(max-width: 769px) {
        font-size: 16px;
    }
`;

export const MContainer = styled.div`
    background: transparent;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 100px;
    width: 90px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 20px;
    left: 20px;
`

export const ElementsContainer = styled.div`
    background: transparent;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    margin-inline: auto;
    height: 190px;
    width: 280px;
    border-radius: 50px;
    transition: all 2s;
`