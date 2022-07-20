import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../globalStyles";
import { icons } from "../../globalStyles";
import { Span } from "../IconButton/IconButtonStyles";

export const CollapsedMenu = styled.div.attrs({
    className: 'collapsed-menu show-menu'
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
    className: 'background-menu opacity-menu'
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
    className: 'visible-menu move-menu'
})`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${ theme.color3 };
    height: auto;
    width: 80%;
    margin-left: -100%;
    transition: margin 200ms ease;
    overflow-y: scroll;
    z-index: 10;
`;

export const ProfilePicture = styled.img`
    background-color: blue;
    width: 50px;
    height: 50px;
`;

export const Nav = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    list-style:  none;
`;

export const Li = styled.li`
    display: block;
    border-top: 1px solid black;
    background-color: ${ theme.color1 };
    
    &:last-child{
        border-bottom: 1px solid black;
    }
`;

export const A = styled(Link)`
    display: block;
    padding: 16px;
    font-size: 16px;
    color: black;
    text-decoration: none;
`;

export const Close = styled(Span)`
    top: 4px;
    right: 4px;
    position: absolute;
    width: 50px;
    height: 50px;
    font-size: calc(${icons.font} + 10px);
`;
