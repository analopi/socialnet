import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState()

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let messagesChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }


    return (
        <Dialogs messagesChange={messagesChange} addMessage={addMessage}
                 newMessageText={state.messagesPage.newMessageText}
                 dialogsData={state.messagesPage.dialogsData}
                 messagesData={state.messagesPage.messagesData}/>
    )
}

export default DialogsContainer