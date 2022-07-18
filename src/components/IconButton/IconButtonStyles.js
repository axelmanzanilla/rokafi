import styled from "styled-components";

export const Button = styled.button.attrs({
    className: 'material-symbols-outlined'
})`
    width: ${props => props.size};
    height: ${props => props.size};
    font-size: ${props => props.size};
    padding: 0;
    border: none;
    background-color: transparent;
`;
