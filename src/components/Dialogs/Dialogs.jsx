import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"







const Dialogs = (props) => {


    let addMessage = () => {
        props.addMessage();
    }
    let onMessagesChange = (e) => {
        let message = e.target.value
        props.messagesChange(message)
    }

    let dialogItems = [
        props.dialogsData.map((el) => <DialogItem name={el.name} id={el.id} id_img={el.id_img} />)
    ]

    let messagesItems = [
        props.messagesData.map((el) => <Message text={el.text} sex={el.sex} id_img={el.id_img} />)
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
                <div>
                    <textarea onChange={onMessagesChange}   value = {props.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>send Message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs