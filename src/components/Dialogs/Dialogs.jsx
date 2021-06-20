import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialogitem/Dialogitem';

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Igor' },
        { id: 2, name: 'Dasha' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Egor' },
        { id: 6, name: 'Andrey' }
    ]

    let messages = [
        { id: 1, messages: 'Hi' },
        { id: 2, messages: 'How is your day?' },
        { id: 3, messages: 'Yo' },
        { id: 4, messages: 'Yo' },
        { id: 5, messages: 'Yo' }
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = messages.map( m => <Message message={m.messages} id={m.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;