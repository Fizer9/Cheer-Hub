import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.flex}>
            <div className={s.avatar}>
                {props.profile.photos.large
                    ? <img src={props.profile.photos.large} />
                    : <img src={userPhoto} />}
            </div>
            <div>
                <div><span className={s.names}>Firstname Secondname</span></div>
                <ProfileStatus className={s.status} 
                status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}
export default ProfileInfo;
