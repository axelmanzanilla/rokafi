import styled from "styled-components";

export const Div = styled.div`
`;

export const Input = styled.input`
    width: 50px;
    height: 50px;

    &:checked ~ div{
        margin-left: 30px;
    }
`;

export const Header = styled.header`
    background-color: red;

    @media (min-width: 768px){
        background-color: blue;
    }
`;

export const Ul = styled.ul`
    background-color: red;
    display: flex;
    list-style: none;

    @media (min-width: 768px){
        background-color: blue;
    }
`;