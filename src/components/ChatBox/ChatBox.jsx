import './ChatBox.css';
import {BiMailSend} from 'react-icons/bi'
import { useState } from 'react';
import * as messagesAPI from '../../utilities/messages-api';

const ChatBox = ({userId, channelId, handleX}) => {
    const [message, setMessage] = useState('');
    
    function handleChange(e) {
        setMessage(e.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault();
        const newMessage = await messagesAPI.sendMessage(channelId, {message, userId})
    }

    return (
        <div className='chatbox-container'>
            <h1 onClick={handleX}>X</h1>
            <div className='chatbox-messages'>

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