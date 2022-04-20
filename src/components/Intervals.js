import Line from './Line.js';

// Line SVG parameters
const line = {
    x1: 0,
    x2: "100%",
    y1: 0,
    y2: 0,
    stroke: "rgb(255,255,255,.3",
    "strokeWidth": 1,
}

const Intervals = (props) => {
    const intervalYs = props.intervals.map((value, index) => 
        100 / (props.intervals.length - 1) * index + "%"
    );
    intervalYs.push("100%");
    return intervalYs.map((value, index) => <Line {...line} y1={value} y2={value} key={"intervals"+ index}></Line>);
}

export default Intervals;