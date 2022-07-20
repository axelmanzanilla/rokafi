import styled from "styled-components";
import { theme } from "../../globalStyles";

export const CollapsedMenu = styled.div.attrs({
    className: 'collapsed-menu'
})`
    position: fixed;
    display: flex;
    width: 100%;
    height: 100vh;
    visibility: hidden;
    transition: all 200ms;
    z-index: 10;
`;

export const BackgroundMenu = styled.div.attrs({
    className: 'background-menu'
})`
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 9;
    transition: opacity 200ms;
`;

export const VisibleMenu = styled.div.attrs({
    className: 'visible-menu'
})`
    display: flex;
    background-color: ${ theme.color3 };
    height: auto;
    width: 80%;
    margin-left: -100%;
    transition: margin 200ms ease;
    overflow-y: scroll;
    z-index: 10;
`;

export const Nav = styled.div`
    flex-grow: 1;
`;
