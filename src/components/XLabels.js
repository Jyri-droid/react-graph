
const XLabels = (props) => {
    return props.xLabels.map((value) => <label className="label" key={value}>{value}</label>);
}

export default XLabels;