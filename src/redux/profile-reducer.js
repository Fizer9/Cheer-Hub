const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postData: [
        { id: 1, messages: 'Hi, how are you?', likesCount: 12 },
        { id: 2, messages: "It's my first post", likesCount: 11 },
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                messages: state.newPostText,
                likesCount: 0,
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreater = () => ({ type: 'ADD_POST' })
export const updateNewPostTextActionCreater = (text) => ({
    type: 'UPDATE_NEW_POST_TEXT', newText: text
})

export default profileReducer;