import './Widget.css';
import {useState} from 'react'; 
import {BsChatRightText} from 'react-icons/bs'
import ChatBox from '../ChatBox/ChatBox';

const Widget = ({userId, channelId}) => {
    const [clicked, setClicked] = useState(false);
    function handleX() {
        setClicked(!clicked);
    }
    return (
        <div className='widget-container' >
            {clicked ? <ChatBox userId={userId} channelId={channelId} handleX={handleX}/> : <BsChatRightText onClick={() => setClicked(!clicked)}/>}
        </div>
    );
}

export default Widget;