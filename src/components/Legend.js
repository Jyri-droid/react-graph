import Line from './Line.js';

const line = {
    x1: 0,
    x2: 30,
    y1: 0,
    y2: 0,
    stroke: "springGreen",
    strokeWidth: 4,
}

const Legend = (props) => {
    return (
        <div className="legend">
            <svg xmlns="http://www.w3.org/2000/svg" width={line.x2} height={line.strokeWidth}><Line {...line}/></svg>
            <p>{props.legend}</p>
            <i className="material-icons">visibility_off</i>
            <p>Hide</p>
        </div>
        )
};

export default Legend;