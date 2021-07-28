import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const posts = (props) => {
    let postsElements = props.postData.map (p => <Post message={p.messages} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST' });
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;

        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text };
        props.dispatch(action);
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea> 
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default posts;