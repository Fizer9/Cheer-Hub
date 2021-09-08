import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profile-reducer';
import Myposts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreater(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreater());
        }
    }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts); 

export default MyPostsContainer;