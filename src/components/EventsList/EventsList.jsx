import './EventsList.css';
import Event from '../Event/Event';

const EventsList = ({events, setSelectedEvent, handleModal }) => {
    return (
        <>
            <div className='events-list-container'>
                { events.length > 0 ? events.map((e, i) => <Event 
                    handleModal={handleModal} 
                    setSelectedEvent={setSelectedEvent} 
                    event={e} 
                    key={i}/>) : 
                <>
                    <h1 className='no-events-alert'>
                        You don't have any events registered yet!
                    </h1>
                </>}
            </div>
        </>
    )
}

export default EventsList;