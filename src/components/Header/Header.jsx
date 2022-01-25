import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {        
        return <header className={s.header}>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
        <div>
            <div>Time spent on development today:</div>
            <div>Hours:  Minutes: </div>
        </div>
    </header>
    }

export default Header;