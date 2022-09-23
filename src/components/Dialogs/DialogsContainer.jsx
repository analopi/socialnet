import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsData,
        messagesData: state.messagesData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        messagesChange: () => {
            dispatch(addMessageActionCreator())
        },
        addMessage: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer