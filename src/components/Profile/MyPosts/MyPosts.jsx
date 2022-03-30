import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from './../../utils/validators';
import { Textarea } from './../../common/FormsControl/FormsControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Myposts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let addNewPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div>
            <div className={s.label}>
                My posts:
            </div>
            <AddPostFormRedux onSubmit={addNewPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength1000 = maxLengthCreator(1000)

const AddPostForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field name='newPostBody' component={Textarea}
                className={s.textarea}
                placeholder="What's new with you"
                validate={[required, maxLength1000]} />
            <button className={s.button}>
                <FontAwesomeIcon icon={faPaperPlane} className={s.sendIcon} />
            </button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(AddPostForm)

export default Myposts;