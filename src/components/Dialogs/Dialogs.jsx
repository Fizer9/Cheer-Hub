import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialogitem/Dialogitem';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} />);

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

    let onSendMessageClick = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.flex}>{messagesElements}</div>
                <SendMessageReduxForm onSubmit={onSendMessageClick}/>
            </div>
        </div>
    )
}

const SendMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <Field name='newMessageBody' component='textarea' rows="4" cols="110" placeholder='Write a message...' />
        <button className={s.send}>Send</button>
    </form>
    )
}

const SendMessageReduxForm = reduxForm({form: 'dialogsSendMessageForm'}) (SendMessageForm)

export default Dialogs;