const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        { id: 6, message: `But we must be swift. He would not wish us to linger. We must follow the Orcs, if there is hope that any of our Company are living prisoners`},
        { id: 5, message: `First, we must tend the fallen. We cannot leave him lying like carrion among these foul Orcs` },
        { id: 4, message: `I do not know. Before he died Boromir told me that the Orcs had bound them; he did not think that they were dead. I sent him to follow Merry and Pippin; but I did not ask him if Frodo or Sam were with him: not until it was too late. All that I have done today has gone amiss. What is to be done now?` },
        { id: 3, message: `The hobbits! Where are they then? Where is Frodo?` },
        { id: 2, message: `Boromir is dead. I am unscathed, for I was not here with him. He fell defending the hobbits, while I was away upon the hill` },
        { id: 1, message: `Alas! We have hunted and slain many Orcs in the woods, but we should have been of more use here. We came when we heard the horn – but too late, it seems. I fear you have taken deadly hurt` },
    ],
    dialogs: [
        { id: 1, name: 'Howard Copeland', img: './avatar1.jpg' },
        { id: 2, name: 'Sandra Johnson', img: './avatar2.jpg' },
        { id: 3, name: 'Steve Fields', img: './avatar3.jpg' },
        { id: 4, name: 'Claudia Howard', img: './avatar4.jpg' },
        { id: 5, name: 'William Weaver', img: './avatar5.jpg' },
        { id: 6, name: 'Ronald Morgan', img: './avatar6.jpg' },
        { id: 7, name: 'John Parker', img: './avatar7.jpg' },
        { id: 8, name: 'Margaret Miller', img: './avatar8.jpg' },
        { id: 9, name: 'Chad Fisher', img: './avatar9.jpg' },
        { id: 10, name: 'Jeanette West', img: './avatar10.jpg' },
    ]
};
const dialogsReducer = (state = initialState, action) => {   
    switch (action.type) {
        case SEND_MESSAGE: 
        let body = action.newMessageBody;
        return {
            ...state,
            messages: [{ id: 7, message: body }, ...state.messages]
        };
        default:
            return state;
    }
}

export const sendMessageCreater = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;