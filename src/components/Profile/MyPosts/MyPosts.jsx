import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const posts = (props) => {

    let postsElements = props.postData.map (p => <Post message={p.messages} likesCount={p.likesCount} />)
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default posts;