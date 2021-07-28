import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialogitem/Dialogitem';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from './../../redux/state';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} img={d.img}/> );

    let messagesElements = props.state.messages.map( m => <Message message={m.messages} id={m.id} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreater());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreater(text);
        props.dispatch(action);
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
            <div><textarea onChange={onMessageChange} value={props.state.newMessageText} ref={newMessageElement} rows="4" cols="110" placeholder='Write a message...' /><button className={s.send} onClick={addMessage}>Send</button></div>
        </div>
    )
}

export default Dialogs;