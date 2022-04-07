import { useState } from "react";
import Button from './Button.js';

const FavoriteColor = () => {
    const [color, setColor] = useState("red");
  
    return (
      <>
        <h1>My favorite color is {color}!</h1>
        <Button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</Button>
      </>
    )
  }

export default FavoriteColor;