import styled from "styled-components";
import { theme } from "../../globalStyles";

export const Target = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 4px 16px 4px;
    padding: 4px;
    border-radius: 4px;
    background-color: ${ theme.back2 };
`;

export const Title = styled.h2`
    margin: 0 0 8px 0;
`;
