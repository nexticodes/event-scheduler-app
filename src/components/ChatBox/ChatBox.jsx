import './ChatBox.css';
import {BiMailSend} from 'react-icons/bi'
import { useState } from 'react';

const ChatBox = () => {
    const [message, setMessage] = useState('');
    
    function handleChange(e) {
        setMessage(e.target.value);
    }

    return (
        <div className='chatbox-container'>
            <h1>X</h1>
            <div className='chatbox-messages'>

            </div>
            <div className='chatbox-controls'>
                <div className='chatbox-textarea'>
                    <textarea value={message} onChange={handleChange}></textarea>
                </div>
                <div className='chatbox-button'>
                    <BiMailSend/>
                </div>
            </div>
        </div>
    )
}

export default ChatBox;