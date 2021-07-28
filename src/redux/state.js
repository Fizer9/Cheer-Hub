let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, messages: 'Hi, how are you?', likesCount: 12 },
                { id: 2, messages: "It's my first post", likesCount: 11 },
            ],
            newPostText: 'Value',
        },
        dialogsPage: {
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
            newMessageText: 'Value',
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                messages: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
export default store;