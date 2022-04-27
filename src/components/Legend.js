import Line from './Line.js';

const line = {
    x1: 0,
    x2: 30,
    y1: 0,
    y2: 0,
    strokeWidth: 4
}

const Legend = (props) => {

    const handleClick = (index) => {
        // If legend is clicked and its index is not inside visibility, bring it back
        console.log(index);
        if (!props.visibility.includes(index)) {
            const newVisibility = [...props.visibility, index];
            props.setVisibility(newVisibility);
        } else {
            const newVisibility = props.visibility.filter((value) => value !== index);
            props.setVisibility(newVisibility);
        }
    };

    return <>
        <button className="legend" onClick={() => handleClick(props.index)}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width={line.x2} 
                height={line.strokeWidth}
                style={{"stroke": props.lineColor}}
            >
                <Line {...line}/>
            </svg>
            <p style={{textDecoration: props.visibility.includes(props.index) ? "none" : "line-through"}}>{props.text}</p>
            <i className="material-icons" >{props.visibility.includes(props.index) ? "visibility_off" : "visibility_on"}</i>
        </button>
        </>
};

export default Legend;


