import React from "react";
import style from "./style.module.css";
import CheckBox from '../myCheckBox/CheckBox.jsx';
const ListItem = ({ id , fullName, isInTeam, onToggleTeam  }) => {
  return (
    <li className={style.list_item}>
      <div className= {`${isInTeam ? style.in_Team : style.out_team}`}>
      <i className={`fas fa-user`}></i>
      <span className={style.name_txt}>{fullName}</span>
      </div>
      <CheckBox id = {id} isSelected = {isInTeam} onChange = {()=>{
        onToggleTeam(id);
      }}/>
     
    </li>
  );
};

export default ListItem;
