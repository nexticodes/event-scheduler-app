import './EventDetails.css';
import { useState } from 'react';

const EventDetails = ({selectedEvent}) => {
    const {
        _id,
        title,
        host,
        alias,
        eventDate,
        eventTime,
        location,
        coverFee,
        attendees,
        active,
        gracePeriod,
        finalWarning
    } = selectedEvent;
    const [updatedEvent, setUpdatedEvent] = useState({
        ...selectedEvent
    })
    const handleChange = (e) => {
        setUpdatedEvent({...updatedEvent, [e.target.name]: e.target.value});
    }
    return (
        <div className='event-details-container'>
            <form>
                <input name="title" value={title}/>
                <input name="alias" value={alias}/>
                <input name="eventDate" value={eventDate}/>
                <input name="eventTime" value={eventTime}/>
                <input name="location" value={location}/>
                <input name="coverFee" value={coverFee}/>
                <input name="gracePeriod" value={gracePeriod}/>
                <input name="finalWarning" value={finalWarning}/>
                <input type="checkbox" value={active} checked={active} onChange={handleChange}/>

            </form>
        </div>
    )   
}

export default EventDetails;