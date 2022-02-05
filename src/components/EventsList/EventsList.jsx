import './EventsList.css';
import Event from '../Event/Event';

const EventsList = ({events}) => {
    return (
        <>
            <div className='events-list-container'>
                {events.map((e, i) => <Event event={e} key={i} type={i === events.length - 1 && 'btn'}/>)}
            </div>
        </>
    )
}

export default EventsList;