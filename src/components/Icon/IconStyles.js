import styled from "styled-components";
import { icons } from "../../globalStyles";

export const Span = styled.span.attrs({
    className: 'material-symbols-outlined'
})`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${ props => props.size };
    height: ${ props => props.size };
    font-size: ${ props => props.font };
    margin-right: ${ props => props.right };
    color: ${ icons.color };
    border: none;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
`;
