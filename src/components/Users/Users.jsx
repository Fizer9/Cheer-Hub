import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    //Fake user data
    let cities = ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan', 'Nizhny Novgorod', 'Chelyabinsk', 'Samara',
    'Omsk', 'Rostov-on-Don', 'Ufa', 'Krasnoyarsk', 'Voronezh', 'Perm', 'Volgograd', 'Krasnodar', 'Saratov', 'Tyumen', 'Tolyatti',
    'Izhevsk', 'Barnaul', 'Ulyanovsk', 'Irkutsk', 'Khabarovsk', 'Makhachkala', 'Yaroslavl', 'Vladivostok', 'Orenburg', 'Tomsk',
    'Kemerovo']

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                            props.toggleFollowingProgress(true, u.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'bec2d1fe-f220-4cf0-aade-79bfda67666f'
                                }
                            }).then(response => {
                                if (response.data.resultCode == 0) {
                                    props.unfollow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id)
                            })

                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                            props.toggleFollowingProgress(true, u.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'bec2d1fe-f220-4cf0-aade-79bfda67666f'
                                }
                            }).then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id)
                            })
                        }}>Follow</button>}
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>Russia</div>
                <div>{cities[Math.floor(Math.random() * cities.length)]}</div>
            </div>)
        }
    </div>
}

export default Users