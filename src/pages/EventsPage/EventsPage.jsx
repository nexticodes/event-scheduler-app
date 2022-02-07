import './EventsPage.css';
import { Link } from 'react-router-dom';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import ProfileDashboard from '../../components/ProfileDashboard/ProfileDashboard';
import EventsList from '../../components/EventsList/EventsList';

const EventsPage = ({user}) => {
    const events = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    return (
        <main className="events-page">
            <div className="user-profile-container">
                <ProfileBox user={user} />
                <ProfileDashboard user={user} />
            </div>
            <div className='events-options-container'>
                <Link to='/events/add'><button>Add Event</button></Link>
                <button>Search Event</button>
            </div>
            <EventsList events={events} user={user}/>
        </main>
    )
}

export default EventsPage;