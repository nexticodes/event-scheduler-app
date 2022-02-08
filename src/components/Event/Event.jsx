import './Event.css';

const Event = ({handleModal, event, setSelectedEvent}) => {
    const {alias, eventDate, attendees, location, active} = event;
    const handleClick = () => {
        setSelectedEvent(event);
        handleModal('detail', true)
    }
    return (
        <>          
            <div className='event event-container' onClick={handleClick}>
                <div className='event-alias-container'>
                    <h1>{alias}</h1>
                </div>
                <div className='event-details'>
                    <h4>{location}</h4>
                    <span className='smaller'>WHERE</span>
                    <h4 >{new Date(eventDate).toLocaleDateString()}</h4>
                    <span className='smaller'>DATE</span>
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