import styled from "styled-components";
import { theme, headerStyles } from "../../globalStyles";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${ theme.color3 };
    height: ${ headerStyles.headerHeight };

    @media (min-width: 768px){
        background-color: blue;
    }
`;
