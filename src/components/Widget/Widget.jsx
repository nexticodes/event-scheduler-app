import './Widget.css';
import {useState} from 'react'; 
import {BsChatRightText} from 'react-icons/bs'
import ChatBox from '../ChatBox/ChatBox';

const Widget = ({socket, userId, channelId}) => {
    const [clicked, setClicked] = useState(false);
    async function handleX() {
        await socket.emit('leave-chat', {channelId})
        setClicked(!clicked);
    }
    
    async function handleChatClick () {
        await socket.emit('join-chat', {channelId})
        setClicked(!clicked)
    }
    return (
        <div className='widget-container' >
            {clicked ? <ChatBox socket={socket} userId={userId} channelId={channelId} handleX={handleX}/> : <BsChatRightText onClick={handleChatClick}/>}
        </div>
    );
}

export default Widget;