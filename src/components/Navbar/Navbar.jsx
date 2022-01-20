import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.logo}>Logo</div>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' activeClassName={s.active}>messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/users' activeClassName={s.active}>users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>news</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;