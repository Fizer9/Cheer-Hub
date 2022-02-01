import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import { Field, reduxForm } from "redux-form";

const Myposts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let addNewPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div>
            My posts
        <AddPostFormRedux onSubmit={addNewPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostBody' component='textarea' placeholder="What's new with you"/>
            <button>Add post</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm'}) (AddPostForm)

export default Myposts;