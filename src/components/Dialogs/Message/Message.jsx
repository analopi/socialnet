import React from "react";
import s from './../Dialogs.module.css';

const Message = (props) => {
    const message = s[props.sex]
    let classs = ''
    let src = ''
    if (props.sex === 'my') {
        classs = s.my;
        src = 'https://loginportal.funnyjunk.com/comments/+_e7e00c8f8a605ad40671872cc682ce62.jpg'
    }
    else {
        classs = s.him
        src = require('./../avatar/' + props.id_img)
    }


    return (
        <div className={classs}>
            <img src={src} alt="" />{props.text}
        </div>
    )
}

export default Message