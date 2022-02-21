import './Widget.css';
import {useState} from 'react'; 
import {BsChatRightText} from 'react-icons/bs'
import ChatBox from '../ChatBox/ChatBox';

const Widget = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <div className='widget-container' >
            {clicked ? <ChatBox/> : <BsChatRightText onClick={() => setClicked(!clicked)}/>}
        </div>
    );
}

export default Widget;