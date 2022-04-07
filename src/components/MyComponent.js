const MyComponent = (props) => {
    return <h1 className="MyComponent" style={{color: props.color, backgroundColor: props.bgColor}}>Hello yello, {props.name}</h1>;
  }
  
export default MyComponent;