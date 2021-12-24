import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>

            <img src='logo.svg' />
            <input type="search" placeholder='Global search'/>
        </header>
}
export default Header;