import styled from "styled-components";
import { Span } from "../../components/Icon/IconStyles";
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
    z-index: 11;
    `:`
    top: calc((${header.height} - ${searchBar.height})/2);
    left: calc(${icons.size} + ${logo.width} + 8px);
    width: calc(100% - ${logo.width} - 2*(${icons.size}) - 8px);
    height: ${ searchBar.height };
    border-radius: calc(${searchBar.height}/2);
    z-index: 8;
    `}
`;

export const Input = styled.input`
    flex-grow: 1;
    border: none;
    outline: none;
    min-width: 0;
    height: 100%;
    background-color: transparent;
    transition: all 150ms;
    ${ props => props.focus ? `
    margin: 0px;
    font-size: 20px;
    `:`
    margin: 0 0 0 16px;
    font-size: 16px;
    `}
`;

export const Back = styled(Span)`
    overflow: hidden;
    ${ props => props.focus ? ``:`width: 0px;`}
`;
