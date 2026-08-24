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