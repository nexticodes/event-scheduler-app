import './AttendeesList.css';
import Attendee from '../Attendee/Attendee';

const AttendeesList = ({attendees}) => {
    return (
        <>
            <div className='attendees-list-container'>
                {attendees.map((a, i) => 
                    <Attendee a={a} i={i} key={i}/>
                )}
            </div>  
        </>
    )
}

export default AttendeesList;