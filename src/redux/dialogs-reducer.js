const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                messages: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
            default:
                return state;
    }
}

export const addMessageActionCreater = () => ({ type: 'ADD_MESSAGE' })
export const updateNewMessageTextActionCreater = (text) => ({
    type: 'UPDATE_NEW_MESSAGE_TEXT', newText: text
})

export default dialogsReducer;