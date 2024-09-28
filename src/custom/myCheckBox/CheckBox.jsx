import React from "react";
import style from "./style.module.css";

const CheckBox = ({id, isSelected, onChange}) => {
    const [selected, setSelected] = React.useState(isSelected);
  return <span key={id} className={`${style.checkbox} ${selected ? style.selected : ""}`}
  onClick={()=>{
    setSelected(!selected);
    onChange(id);
  }}>
    {selected && <i className={`${style.icon}  fas fa-check`}></i>}
  </span>;
}; 

export default CheckBox;
