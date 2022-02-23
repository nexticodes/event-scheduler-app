import './ChatBox.css';
import {BiMailSend} from 'react-icons/bi'
import { useState, useEffect } from 'react';
import * as messagesAPI from '../../utilities/messages-api';

import ChatMessage from '../ChatMessage/ChatMessage';


const ChatBox = ({socket, userId, channelId, handleX}) => {
    const [message, setMessage] = useState('');
    const [allMessages, setAllMessages] = useState([]);

    useEffect(() => {
        getMessages();
        socket.on('receive-message', (data) => {
            getMessages();
        })
    }, [socket])

    function handleChange(e) {
        setMessage(e.target.value);
    }

    async function getMessages(){
        const channelMessages = await messagesAPI.getMessages(channelId);
        setAllMessages(channelMessages);
    }

    async function handleSubmit(e){
        e.preventDefault();
        const newMessage = await messagesAPI.sendMessage(channelId, {message, userId});
        await socket.emit('send-message', {message, userId, channelId})
        getMessages();
        setMessage('');
    }

    return (
        <div className='chatbox-container'>
            <h1 onClick={handleX}>X</h1>
            <div className='chatbox-messages'>
                {allMessages.map((m, i) => <ChatMessage userId={userId} m={m} i={i} key={m._id}/>).reverse()}
            </div>
            <form className='chatbox-controls'>
                <div className='chatbox-textarea'>
                    <textarea value={message} onChange={handleChange}></textarea>
                </div>
                <button id='chatbox-button' onClick={handleSubmit}>
                    <BiMailSend />
                </button>
            </form>
        </div>
    )
}

export default ChatBox;