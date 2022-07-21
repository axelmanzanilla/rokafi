import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../globalStyles";
import { icons } from "../../globalStyles";
import { Span } from "../Icon/IconStyles";

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
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${ theme.color3 };
    height: auto;
    width: 80%;
    margin-left: -100%;
    transition: margin 200ms ease;
    overflow-y: scroll;
    z-index: 10;
`;

export const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 20px 0;
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 8px 0;
`;

export const ProfilePicture = styled.img`
    width: 80px;
    height: 80px;
    border: 3px solid white;
    border-radius: 100%;
`;

export const Nav = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    margin: 0;
    padding: 0;
    text-align: center;
    list-style:  none;
`;

export const Li = styled.li`
    display: flex;

    &:last-child{
        margin-bottom: 20px;
    }
`;

export const A = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 10px;
    padding: 4px;
    font-size: 20px;
    color: black;
    text-decoration: none;
`;

export const Logout = styled.div`
    display: flex;
    align-items: center;
    place-content: center;
    position: sticky;
    display: flex;
    min-height: 52px;
    border-top: 1px solid black;
    right: 0;
    bottom: 0;
    background-color: #E06579;
`;

export const LogoutLink = styled(Link)`
    padding: 4px;
    color: black;
    text-decoration: none;
`;

export const Close = styled(Span)`
    position: absolute;
    top: 4px;
    right: 4px;
    width: 50px;
    height: 50px;
    font-size: calc(${icons.font} + 10px);
`;
