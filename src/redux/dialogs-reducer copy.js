const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        { id: 1, name: "Vitalik", id_img: "1.png" },
        { id: 2, name: "Roma", id_img: "2.jpg" },
        { id: 3, name: "Sveta", id_img: "3.jpeg" },
        { id: 4, name: "Kazah", id_img: "4.jpg" },
        { id: 5, name: "Andrey", id_img: "5.jpg" }
    ],
    messagesData: [
        { id: 1, text: "Hello", sex: "my" },
        { id: 2, text: "Hi", sex: "him", id_img: "1.png" },
        { id: 3, text: "How Are you?", sex: "my" }
    ],
    newMessageText: "hehehe"
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:      
                let newText = {
                    id: 4,
                    text: state.newMessageText,
                    sex: "my"
                }
                 return{ 
                    ...state,
                    messagesData:[...state.messagesData, newText],
                    newMessageText: ''
                 }
        case UPDATE_NEW_MESSAGE_TEXT: 
                 return { 
                    ...state,
                    newMessageText: action.newMessageText
                 }
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text
})

export default dialogsReducer;