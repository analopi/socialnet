import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"






const Dialogs = (props) => {

    let dialogItems =[
        props.data.dialogsData.map((el) => <DialogItem name={el.name} id={el.id} />)
    ]
    
    let messagesItems = [
        props.data.messagesData.map((el) => <Message text={el.text} />)
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
            </div>
        </div>
    )
}

export default Dialogs