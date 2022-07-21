import { Span } from "./IconStyles";

function Icon(props) {
    return (
        <Span size={props.size} font={props.font} right={props.right} onClick={props.click}>{props.icon}</Span>
    );
}

export default Icon;
