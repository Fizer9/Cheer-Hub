let state = {
    profilePage: {
        postData: [
            { id: 1, messages: 'Hi, how are you?', likesCount: 12 },
            { id: 2, messages: "It's my first post", likesCount: 11 },
        ],
    },
    dialogsPage: {
        messages: [
            { id: 1, messages: 'Hi' },
            { id: 2, messages: 'How is your day?' },
            { id: 3, messages: 'Yo' },
            { id: 4, messages: 'Yo' },
            { id: 5, messages: 'Yo' },
        ],
        dialogs: [
            { id: 1, name: 'Igor' },
            { id: 2, name: 'Dasha' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Egor' },
            { id: 6, name: 'Andrey' },
        ],
    },
}

export default state;