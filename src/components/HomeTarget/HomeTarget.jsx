import { Target, Title } from "./HomeTargetStyles";

function HomeTarget(props) {
    return(
        <Target>
            <Title>{ props.title }</Title>
            { props.children }
        </Target>
    );
}

export default HomeTarget;