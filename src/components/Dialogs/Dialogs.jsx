import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialogitem/Dialogitem';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} img={d.img}/> );

    let messagesElements = props.state.messages.map( m => <Message message={m.messages} id={m.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Messaging</h2>{dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div></div>
            <div><textarea rows="4" cols="110" placeholder='Write a message...'></textarea><button className={s.send}>Send</button></div>
        </div>
    )
}

export default Dialogs;