// children here is the text inside the button tag
import React from "react";
import style from './style.module.css';
const Button = ({ text, bg_color, txt_color}) => {
  const styleing = {
    backgroundImage: `linear-gradient(to right,${bg_color})`,
    color: txt_color,
  };

  const bg_colors = bg_color.join(",");
  return <button style={styleing}
  className = {style.myButton}
  >{text}</button>;
};

export default Button;