import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profile-reducer';
import Myposts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreater());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreater(text);
        props.store.dispatch(action);
    }

    return (<Myposts updateNewPostText={onPostChange} 
        addPost={addPost} 
        postData={state.profilePage.postData}
        newPostText={state.profilePage.newPostText} />)
}

export default MyPostsContainer;