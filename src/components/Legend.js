import Line from './Line.js';

const line = {
    x1: 0,
    x2: 30,
    y1: 0,
    y2: 0,
    strokeWidth: 4
}

const Legend = (props) => {

    const toggleOpacity = () => {
        props.opacity === 1 ? props.setOpacity(0) : props.setOpacity(1);
        console.log("Opacity is now: " + props.opacity);
      };

    return <>
        <button className="legend" onClick={toggleOpacity}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width={line.x2} 
                height={line.strokeWidth}
                style={{"stroke": props.lineColor}}
            >
                <Line {...line}/>
            </svg>
            <p>{props.text}</p>
            <i className="material-icons" >visibility_off</i>
        </button>
        </>
};

export default Legend;


