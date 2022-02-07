import './EventsPage.css';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import ProfileDashboard from '../../components/ProfileDashboard/ProfileDashboard';
import EventsList from '../../components/EventsList/EventsList';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';


const EventsPage = ({user}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const events = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    return (
        <main className="events-page">
            {modalVisible && <Modal user={user} setModalVisible={setModalVisible} />}
            <div className="user-profile-container">
                <ProfileBox user={user} />
                <ProfileDashboard user={user} />
            </div>
            <div className='events-options-container'>
                <button onClick={() => setModalVisible(true)}>Add Event</button>
                <button>Search Event</button>
            </div>
            <EventsList events={events} user={user}/>
        </main>
    )
}

export default EventsPage;