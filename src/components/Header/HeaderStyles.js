import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    background-color: red;

    @media (min-width: 768px){
        background-color: blue;
    }
`;

export const MenuIcon = styled.div`
    width: 40px;
    height: 40px;
    background-image: url("/icons/menu.svg");
`;
