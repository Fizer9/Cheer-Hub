const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How was your day?' },
        { id: 4, message: `It's great. How are you doing?` },
        { id: 5, message: 'Perfect, I just ended this page' },
        { id: 6, message: 'Nice work!' },
    ],
    dialogs: [
        { id: 1, name: 'Igor', img: './Igor.jpg' },
        { id: 2, name: 'Dariya', img: './Dariya.jpg' },
        { id: 3, name: 'Konstantin', img: './Konstantin.jpg' },
        { id: 4, name: 'Alexander', img: './Alexander.jpg' },
        { id: 5, name: 'Anastasia', img: './Anastasia.jpg' },
        { id: 6, name: 'Veronika', img: './Veronika.jpg' },
    ]
};
const dialogsReducer = (state = initialState, action) => {   
    switch (action.type) {
        case SEND_MESSAGE: 
        let body = action.newMessageBody;
        return {
            ...state,
            messages: [...state.messages, { id: 7, message: body }]
        };
        default:
            return state;
    }
}

export const sendMessageCreater = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;