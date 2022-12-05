
export const Button = (props) => {
    return (
        <button className="control-button group"
                onMouseDown={() => {props.update(props.x, props.y)}}
                onMouseUp={() => {props.update(0, 0)}}>
            <div className="transform scale-125">
                <props.icon/>
            </div>
        </button>
    )
}

export const WideButton = (props) => {
    return (
        <button className="wide-control-button group"
                onMouseDown={() => {props.updateRot(props.z)}}
                onMouseUp={() => {props.updateRot(0)}}>
            <div className="transform scale-150">
                <props.icon/>
            </div>
        </button>
    )
}