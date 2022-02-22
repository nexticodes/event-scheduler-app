import './ChatBox.css';
import {BiMailSend} from 'react-icons/bi'
import { useState } from 'react';

const ChatBox = ({channelId, handleX}) => {
    const [message, setMessage] = useState('');
    
    function handleChange(e) {
        setMessage(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log('Yo');
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