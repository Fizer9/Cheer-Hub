import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMessage, faUsers, faNewspaper, faMusic, faGear }
from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            
                <NavLink to='/profile' activeClassName={s.active} className={s.item}><FontAwesomeIcon icon={faUser} /></NavLink>

                <NavLink to='/dialogs' activeClassName={s.active} className={s.item}><FontAwesomeIcon icon={faMessage} /></NavLink>

                <NavLink to='/users' activeClassName={s.active} className={s.item}><FontAwesomeIcon icon={faUsers} /></NavLink>

                <NavLink to='/news' activeClassName={s.active} className={s.item}><FontAwesomeIcon icon={faNewspaper} /></NavLink>

                <NavLink to='/music' activeClassName={s.active} className={s.item}><FontAwesomeIcon icon={faMusic} /></NavLink>

                <NavLink to='/settings' activeClassName={s.active} className={s.item}><FontAwesomeIcon icon={faGear} /></NavLink>

        </nav>
    )
}

export default Navbar;