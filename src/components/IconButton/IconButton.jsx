import { Span } from "./IconButtonStyles";

function IconButton(props) {
    return (
        <Span size={ props.size } font={ props.font }onClick={props.click}>{props.icon}</Span>
    );
}

export default IconButton;
