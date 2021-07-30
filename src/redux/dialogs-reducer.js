const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
        messages: [
            { id: 1, messages: 'Hi' },
            { id: 2, messages: 'Hello' },
            { id: 3, messages: 'How is your day?' },
            { id: 4, messages: 'Greate, how are you going' },
            { id: 5, messages: 'Perfect, I just ended this section' },
            { id: 6, messages: 'Yo, nice work' },
        ],
        dialogs: [
            { id: 1, name: 'Igor', img: './Igor.jpg' },
            { id: 2, name: 'Dasha', img: './Dasha.jpg' },
            { id: 3, name: 'Konstantin', img: './Konstantin.jpg' },
            { id: 4, name: 'Alexander', img: './Alexander.jpg' },
            { id: 5, name: 'Anastasia', img: './Anastasia.jpg' },
            { id: 6, name: 'Veronika', img: './Veronika.jpg' },
        ],
        newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
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