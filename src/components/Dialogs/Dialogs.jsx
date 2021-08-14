import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialogitem/Dialogitem';
import { sendMessageCreater, updateNewMessageBodyCreater } from './../../redux/dialogs-reducer';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} img={d.img}/> );

    let messagesElements = state.messages.map( m => <Message message={m.message} id={m.id} />);

    let newMessageBody = state.newMessageBody;

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Messaging</h2>{dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div></div>
            <div><textarea onChange={onMessageChange} value={sendMessage} ref={newMessageBody} rows="4" cols="110" placeholder='Write a message...' /><button className={s.send} onClick={sendMessage}>Send</button></div>
        </div>
    )
}

export default Dialogs;