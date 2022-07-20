import styled from "styled-components";
import { Link } from "react-router-dom";
import { logo, header } from "../../globalStyles";

export const Logotipo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${ logo.width };
    height: ${ header.height };
`;

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
`;
