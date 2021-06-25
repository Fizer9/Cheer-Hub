import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const posts = (props) => {

    let postsElements = props.postData.map(p => <Post message={p.messages} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost (text);
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default posts;