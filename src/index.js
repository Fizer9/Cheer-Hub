import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    { id: 1, messages: 'Hi, how are you?', likesCount: 12 },
    { id: 2, messages: "It's my first post", likesCount: 11 },
]
let dialogs = [
    { id: 1, name: 'Igor' },
    { id: 2, name: 'Dasha' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Egor' },
    { id: 6, name: 'Andrey' },
]
let messages = [
    { id: 1, messages: 'Hi' },
    { id: 2, messages: 'How is your day?' },
    { id: 3, messages: 'Yo' },
    { id: 4, messages: 'Yo' },
    { id: 5, messages: 'Yo' }
]
ReactDOM.render(<App postData={postData} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
