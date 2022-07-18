import styled from "styled-components";
import { headerStyles } from "../../globalStyles";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: blue;
    height: ${headerStyles.headerHeight};

    @media (min-width: 768px){
        background-color: blue;
    }
`;
