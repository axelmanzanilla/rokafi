import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme, header } from "../../globalStyles";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    background-color: ${ theme.color3 };
    height: ${ header.height };

    @media (min-width: 768px){
        background-color: blue;
    }
`;

export const Placeholder = styled.div`
    flex-grow: 1;
`;

export const A = styled(Link)`
    text-decoration: none;
`;
