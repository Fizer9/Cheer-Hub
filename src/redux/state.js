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
    },
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 7,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
}
export default state;