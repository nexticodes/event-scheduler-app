import './Event.css';

const Event = ({event}) => {
    const {alias, eventDate, attendees, location, active} = event;
    return (
        <>          
            <div className='event event-container'>
                <div className='event-alias-container'>
                    <h1>{alias}</h1>
                </div>
                <div className='event-details'>
                    <span>Where:</span>
                    <h5>{location}</h5>
                    <span>Date:</span>
                    <h5 >{new Date(eventDate).toLocaleDateString()}</h5>
                    <p>{attendees.length} <span style={{fontWeight: 200}}>attendee{attendees.length > 1 && 's'}</span></p>
                    
                </div>
                <div className='event-active'>
                    <p className={`event-active-indicator ${active ? 'on' : 'off'}`}></p>
                    <p className={`smaller ${active ? 'active' : 'inactive'}`}>ACTIVE</p>
                </div>
            </div>
        </>
    )
}

export default Event;