import './Event.css';
import { Link } from 'react-router-dom';

const Event = ({event, type}) => {
    return (
        <>
            {!type ?             
                <div className='event-container'>
                    Hi I'm a single event
                </div> : 
                <div className='event-filler'>
                    {type.includes('btn') && <Link to='/events/add'><button>+</button></Link>}
                </div>
            }
        </>
    )
}

export default Event;