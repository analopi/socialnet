import React from "react";
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <img src={require("./../avatar/" + props.id_img)} alt="" /><NavLink to={"/dialogs/" + props.id} >{props.name}</NavLink>
        </div>
    )
}


export default DialogItem