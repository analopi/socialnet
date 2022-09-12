import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";






const Dialogs = (props) => {


    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let messgaeChange = (e) => {
        let message = e.target.value
        props.dispatch(updateNewMessageTextActionCreator(message))
    }

    let dialogItems = [
        props.data.dialogsData.map((el) => <DialogItem name={el.name} id={el.id} id_img={el.id_img} />)
    ]

    let messagesItems = [
        props.data.messagesData.map((el) => <Message text={el.text} sex={el.sex} id_img={el.id_img} />)
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
                <div>
                    <textarea onChange={ messgaeChange }   value = {props.data.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>send Message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs