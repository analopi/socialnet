import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { NavLink } from "react-router-dom";
import s from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={s.item}>
            <img src={require('./../../Dialogs/avtar/' + props.id_img)} alt="" />{props.name}
        </div>
    )
}

export default Friend