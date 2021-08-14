const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How is your day?' },
        { id: 4, message: 'Greate, how are you going' },
        { id: 5, message: 'Perfect, I just ended this section' },
        { id: 6, message: 'Yo, nice work' },
    ],
    dialogs: [
        { id: 1, name: 'Igor', img: './Igor.jpg' },
        { id: 2, name: 'Konstantin', img: './Konstantin.jpg' },
        { id: 3, name: 'Alexander', img: './Alexander.jpg' },
        { id: 4, name: 'Anastasia', img: './Anastasia.jpg' },
        { id: 5, name: 'Veronika', img: './Veronika.jpg' },
    ],
    newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
}

export const sendMessageCreater = () => ({ type: 'SEND_MESSAGE' })
export const updateNewMessageBodyCreater = (body) =>
    ({ type: 'UPDATE_NEW_MESSAGE_BODY', body: body })

export default dialogsReducer;