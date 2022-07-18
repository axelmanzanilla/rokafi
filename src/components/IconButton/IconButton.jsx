import { Button } from "./IconButtonStyles";

function IconButton(props) {
        return (
            <Button size={props.size} onClick={props.click}>{props.icon}</Button>
    );
}

export default IconButton;
