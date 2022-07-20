import styled from "styled-components";
import { theme } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Container = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;
`;

export const Category = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    height: 100px;
    margin: 8px;
    border-radius: 4px;
    background-color: ${ theme.color1 };
`;

export const Title = styled.h3`
    margin: 0;
`;
