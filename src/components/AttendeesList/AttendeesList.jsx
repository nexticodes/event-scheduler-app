import './AttendeesList.css';
import Attendee from '../Attendee/Attendee';

const AttendeesList = ({attendees}) => {
    return (
        <div className='attendees-outer'>
            <p id='attendees'>ATTENDEES</p>
            <div className='attendees-list-container'>
                {attendees.map((a, i) => 
                    <Attendee a={a} i={i} key={i}/>
                )}
            </div>  
        </div>
    )
}

export default AttendeesList;