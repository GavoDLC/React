import React, {useState} from "react";
function ShowHide() {
    //hook de react
    const [show, setShow]=useState(true);
    const handleClick = (event) => {
        setShow(!show);
    }

  return <div>
  <button onClick={handleClick}>Hide Text</button>
    {show && <h2> HIDE ME!</h2>}
  </div>
  
}

export default ShowHide;