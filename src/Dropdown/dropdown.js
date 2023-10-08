import {  useState } from "react";
import Style from './dropdown.module.css';

function Dropdown() {

  // options
  const list = ["opton 0", "opton 1", "opton 2", "opton 3"];

  // Used for showing the selected Itme
  const [selectedOption, setSelectedOption] = useState("");

  // Used for storing a optionArray
  const [optionArray, setOptionArray] = useState([]);
  
  const handleMouseOver = ()=>{
    setOptionArray(list);
  }

  const handleClick = ()=>{
    setOptionArray([]);
  }
  // selected Item
  const handleOptionClick = (data)=>{
    setSelectedOption(data);
  }
  return (
    <>
      <div onClick={handleClick}>
        <h1>Choose your option carefully?</h1>
        <div>
          <h2>{selectedOption}</h2>
          <div onMouseOver={handleMouseOver} className={Style.initialOption}>Select</div>
          <div className={Style.options}>
              {optionArray.map((data)=> (
                  <div onClick={() => handleOptionClick(data)} className={Style.singleOption}>{data}</div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
