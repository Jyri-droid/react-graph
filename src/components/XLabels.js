
const XLabels = (props) => {
    return props.xLabels.map((value) => <label className="label" key={"xLabel" + value}>{value}</label>);
}

export default XLabels;