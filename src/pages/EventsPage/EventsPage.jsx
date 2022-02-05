import './EventsPage.css';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import ProfileDashboard from '../../components/ProfileDashboard/ProfileDashboard';

const EventsPage = ({user}) => {
    return (
        <>
            <div className="user-profile-container">
                <ProfileBox user={user} />
                <ProfileDashboard user={user} />
            </div>
        </>
    )
}

export default EventsPage;