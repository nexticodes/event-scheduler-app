import './EventsList.css';
import Event from '../Event/Event';

const EventsList = ({events}) => {
    return (
        <>
            <div className='events-list-container'>
                {events.map((e, i) => <Event event={e} key={i}/>)}
            </div>
        </>
    )
}

export default EventsList;