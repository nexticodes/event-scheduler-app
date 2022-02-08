import './Event.css';
import { Link } from 'react-router-dom';

const Event = ({event}) => {
    const {alias, eventDate, active} = event;
    return (
        <>          
            <div className='event event-container'>
                <div className='event-alias-container'>
                    <h1>{alias}</h1>
                </div>
                <div className='event-details'>
                    <h4>{new Date(eventDate).toLocaleDateString()}</h4>
                </div>
                <div className='event-active'>
                    <p className={`event-active-indicator ${active ? 'on' : 'off'}`}></p>
                    <p className={active ? 'active' : 'inactive'}>ACTIVE</p>
                </div>
            </div>
        </>
    )
}

export default Event;