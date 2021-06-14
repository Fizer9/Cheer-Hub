import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Igor</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/2'>Dasha</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/3'>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/4'>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/5'>Egor</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/6'>Andrey</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.messages}>Hi</div>
                <div className={s.messages}>How are you?</div>
                <div className={s.messages}>Hey</div>
            </div>
        </div>
    )
}

export default Dialogs;