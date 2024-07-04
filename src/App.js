import { useState } from "react";
import "./App.css";

function App() {
  const [ele_hover_index, setEle_hover_index] = useState(undefined)
  const [ele_index, setEle_index] = useState(undefined)
  const handleHover = (index) => {
    setEle_hover_index(index)
  };

  const handleClick = (index) => {
    console.log("handleClick" , index );
    setEle_index(index)
  };

  return (
    <>
      <h1>Rating Stars</h1>
      <div className="all_stars">
        {Array.from(Array(10)).map((_, index) => {
          return (
            <div  className={ ` star ${ index <= (ele_hover_index || ele_index) ? 'color-star' : '' } `}  key={index}  onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover(undefined)}  onClick={() => handleClick(index)}  ></div>
          );
        })}
      </div>
    </>
  );
}

export default App;
