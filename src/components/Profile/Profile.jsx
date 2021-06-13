import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://www.biletik.aero/upload/medialibrary/eb3/eb3395de4d9310e8b6a8e54c15eb3d7e.jpg" alt="#" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;
