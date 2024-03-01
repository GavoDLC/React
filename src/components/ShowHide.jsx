import React, {useState} from "react";
function ShowHide() {
    //hook de react
    const [show, setShow]=useState(true);
    //evento de click
    const handleClick = (event) => {
        setShow(!show);
    }

  return <div>
    {/* operador ternario */}
    {/* onClick es un evento de clic */}
  <button onClick={handleClick}>{show ? "Hide Text" : "Show Text"}</button>
    {show && <h2> HIDE ME!</h2>}
  </div>
  
}

export default ShowHide;