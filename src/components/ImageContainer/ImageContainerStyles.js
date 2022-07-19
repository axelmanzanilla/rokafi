import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: ${ props => props.w };
    height: ${ props => props.h };
    padding: 0 4px 0 4px;
`;

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
`;
