import React from 'react';
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreater());
    };

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreater(body));
    };

    return (
        <Dialogs updateNewMessageBody={onMessageChange} sendMessage={sendMessage}
            dialogsPage={state} />
    )
}

export default DialogsContainer;