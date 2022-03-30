import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialogitem/Dialogitem';
import AddMessage from './AddMessageForm/AddMessageForm';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} />);

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

    let onSendMessageClick = (values) => {
        props.sendMessage(values.newMessageBody);
        let messagesArea = document.getElementById('messagesArea');
        messagesArea.scrollTop = messagesArea.scrollHeight;
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.rightColumn}>
                <div className={s.messagesWrapper}>
                <div className={s.messagesArea} id='messagesArea'>
                    <div className={s.flex}>{messagesElements}</div>
                </div>
                <AddMessage onSubmit={onSendMessageClick} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;