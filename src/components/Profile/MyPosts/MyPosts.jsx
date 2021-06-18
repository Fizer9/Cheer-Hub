import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {

    let postData = [
        { id: 1, messages: 'Hi, how are you?', likesCount: 12},
        { id: 2, messages: "It's my first post", likesCount: 11},

    ]
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].messages} likesCount={postData[0].likesCount} />
                <Post message={postData[1].messages} likesCount={postData[1].likesCount} />
            </div>
        </div>
    )
}

export default MyPosts;