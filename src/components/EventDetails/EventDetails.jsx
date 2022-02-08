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
        gracePeriod,
        finalWarning,
        active,
    } = selectedEvent;
    const [updatedEvent, setUpdatedEvent] = useState({
        ...selectedEvent
    })
    const [isUpdating, setIsUpdating] = useState(false);
    const handleChange = (e) => {
        setUpdatedEvent({...updatedEvent, [e.target.name]: e.target.value});
    }

    return (
        <div className='event-details-container'>
            <div className='event-details-header'>{isUpdating ? 'Updating' : 'Viewing'} 
            <textarea disabled={!isUpdating} className='event-title' name='title' value={updatedEvent['title']} onChange={handleChange}/>
            </div>                        

            <form className='event-details-form'>
                <div className='top'>
                    <div className='deets'>
                            <input maxLength={3} disabled={!isUpdating} className='alias' name='alias' value={updatedEvent['alias']} onChange={handleChange}/>
                        <span className='smaller'>
                            ALIAS
                        </span>

                    </div>
                    <div className='datetime'>
                        <input type='date' disabled={!isUpdating} className='eventDate' name='eventDate' value={new Date(updatedEvent['eventDate']).toLocaleString()} onChange={handleChange}/>
                        <input type='time' disabled={!isUpdating} className='eventTime' name='eventTime' value={updatedEvent['eventTime']} onChange={handleChange}/>
                    </div>
                </div>
                <div className='location'>
                    IMAGINARY MAP GOES HERE
                    <input disabled={!isUpdating} name='location' value={updatedEvent['location']} onChange={handleChange}/>
                </div>
                <div className='bottom'>
                    <div className='bottom-numbers'>
                        <span>
                            <input disabled={!isUpdating} type='number' className='coverFee' name='coverFee' value={updatedEvent['coverFee']} onChange={handleChange}/>

                        </span>
                        <span>

                            <input disabled={!isUpdating} type='number' className='gracePeriod' name='gracePeriod' value={updatedEvent['gracePeriod']} onChange={handleChange}/>
                        </span>
                        <span>
                            <input disabled={!isUpdating} type='number' className='finalWarning' name='finalWarning' value={updatedEvent['finalWarning']} onChange={handleChange}/>
                        </span>
                        
                    </div>
                    <div className='bottom-active'>

                    <label>
                        Active
                    </label>
                        <input type='checkbox' name='active' checked={updatedEvent.active === 'true'} onChange={handleChange}/>
                    </div>
                </div>
            </form>
            {isUpdating ? <button onClick={() => setIsUpdating(false)}>SAVE</button> : <button onClick={() => setIsUpdating(true)}>EDIT</button>}
        </div>
    )   
}

export default EventDetails;