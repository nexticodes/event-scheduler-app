import './EventsPage.css';
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
            <hr />
            <div className="events-wrapper">
                <EventsList events={events} user={user}/>
            </div>
        </main>
    )
}

export default EventsPage;