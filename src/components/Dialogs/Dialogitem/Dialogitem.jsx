import React from 'react';
import s from './Dialogitem.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/dialog-' + props.id;
    return (
        <NavLink to={path} activeClassName={s.active} className={s.dialog}>
            <div className={s.dialogItem}>
                <div className={s.imgWrapper}>
                    <img src={props.img} alt="" />
                </div>
                <span>{props.name}</span>
            </div>
        </NavLink>
    )
}

export default DialogItem;