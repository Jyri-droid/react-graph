const separateThousands = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const YLabels = (props) => {
    return props.intervals.map((value) => <label className="label" key={"yLabel"+ value}>{separateThousands(value)}</label>);
}

export default YLabels;