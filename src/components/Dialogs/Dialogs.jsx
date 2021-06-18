import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'igor' },
        { id: 2, name: 'Dasha' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Egor' },
        { id: 6, name: 'Andrey' }
    ]
    let messagesData = [
        { id: 1, messages: 'Hi' },
        { id: 2, messages: 'How is your day?' },
        { id: 3, messages: 'Yo' },
        { id: 4, messages: 'Yo' },
        { id: 5, messages: 'Yo' }
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Igor' id='1' />
                <DialogItem name='Dasha' id='2' />
                <DialogItem name='Sveta' id='3' />
                <DialogItem name='Sasha' id='4' />
                <DialogItem name='Egor' id='5' />
                <DialogItem name='Andrey' id='6' />
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How is your day?' />
                <Message message='Yo' />
                <Message message='Yo' />
                <Message message='Yo' />
            </div>
        </div>
    )
}

export default Dialogs;