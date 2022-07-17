import styled from "styled-components";

export const CollapsedMenu = styled.div.attrs({
    className: 'collapsed-menu'
})`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    visibility: hidden;
    transition: all 0.3s;
`;

export const BackgroundMenu = styled.div.attrs({
    className: 'background-menu'
})`
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    z-index: 9;
    opacity: 0;
    transition: opacity 0.3s;
`;

export const VisibleMenu = styled.div.attrs({
    className: 'visible-menu'
})`
    display: flex;
    background-color: blue;
    height: auto;
    width: 80%;
    margin-left: -100%;
    transition: margin 0.3s ease;
    overflow-y: scroll;
    z-index: 10;
`;

export const CloseIcon = styled.div`
    right: 5px;
    width: 44px;
    height: 44px;
    background-image: url("/icons/close.svg");
    background-size: contain;
`;

export const Nav = styled.div`
    flex-grow: 1;
`;
