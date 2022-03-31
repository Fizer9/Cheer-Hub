import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.usersPage}>
        <div className={s.pagination}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        <div className={s.usersCards}>
            {
                props.users.map(u => <div className={s.userCard} key={u.id}>
                    <div className={s.leftColumn}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                        </NavLink>
                    </div>
                    <div>
                        <div className={s.name}>{u.name}</div>
                        <div>{u.status}</div>
                        <div>
                            {u.followed
                                ? <button className={s.button} disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => { props.unfollow(u.id) }}>
                                    Unfollow</button>
                                : <button className={s.button} disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => { props.follow(u.id) }}>
                                    Follow</button>}
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
}

export default Users