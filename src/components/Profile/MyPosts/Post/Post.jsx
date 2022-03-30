import React from 'react';
import s from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Post = (props) => {

    return (
        <div className={s.item}>
            <div className={s.flex}>
                <div className={s.userAvatarWrapper}>
                    <FontAwesomeIcon className={s.userAvatar} icon={faUser} />
                </div>
                <div>
                    <div className={s.names}>
                        Firstname Secondname
                    </div>
                    <div>
                        {props.message}
                    </div>
                    <span className={s.likeButton}><FontAwesomeIcon className={s.likeLogo} icon={faHeart} />{props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;