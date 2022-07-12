import styled from "styled-components";

export const Menu = styled.div`
    display: none;
`;

export const CollapsedMenu = styled.div.attrs({
    className: 'collapsed-menu'
})`
    position: absolute;
    width: 80%;
    height: 100%;
    margin-left: -80%;
    background-color: green;
    transition: margin 0.4s ease;
    overflow-y: auto;
`;
