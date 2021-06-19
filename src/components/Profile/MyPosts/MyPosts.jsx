import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const posts = () => {

    let postData = [
        { id: 1, messages: 'Hi, how are you?', likesCount: 12 },
        { id: 2, messages: "It's my first post", likesCount: 11 },
    ]

    let postsElements = postData.map(p => <Post message={p.messages} likesCount={p.likesCount} />)
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