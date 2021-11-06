import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://www.biletik.aero/upload/medialibrary/eb3/eb3395de4d9310e8b6a8e54c15eb3d7e.jpg" alt="#" />
            </div>
            <div>
                <img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;
