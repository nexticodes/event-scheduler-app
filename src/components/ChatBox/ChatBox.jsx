import './ChatBox.css';
import {BiMailSend} from 'react-icons/bi'

const ChatBox = () => {
    return (
        <div className='chatbox-container'>
            <h1>X</h1>
            <div className='chatbox-messages'>

            </div>
            <div className='chatbox-controls'>
                <div className='chatbox-textarea'>
                    <textarea></textarea>
                </div>
                <div className='chatbox-button'>
                    <BiMailSend/>
                </div>
            </div>
        </div>
    )
}

export default ChatBox;