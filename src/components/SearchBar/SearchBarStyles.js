import styled from "styled-components";
import { Span } from "../../components/IconButton/IconButtonStyles";
import { theme, icons, logo, header, searchBar } from "../../globalStyles";

export const Container = styled.form`
    position: absolute;
    display: flex;
    align-items: center;
    background-color: ${ theme.white };
    transition: all 150ms;
    ${ props => props.focus ? `
    top: 0px;
    left: 0px;
    width: 100%;
    height: ${header.height};
    `:`
    top: calc((${header.height} - ${searchBar.height})/2);
    left: calc(${icons.size} + ${logo.width} + 8px);
    width: calc(100% - ${logo.width} - 2*(${icons.size}) - 8px);
    height: ${ searchBar.height };
    border-radius: calc(${searchBar.height}/2);
    `}
`;

export const Input = styled.input`
    transition: all 150ms;
    flex-grow: 1;
    border: none;
    outline: none;
    ${ props => props.focus ? `
    margin: 0px;
    font-size: 20px;
    `:`
    margin: 0 0 0 16px;
    font-size: 16px;
    `}
    background-color: transparent;
    /* background-color: blue; */
`;

export const Back = styled(Span)`
    overflow: hidden;
    ${ props => props.focus ? ``:`width: 0px;`}
`;
