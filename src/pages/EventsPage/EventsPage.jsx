import './EventsPage.css';
import { useEffect, useState } from 'react';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import ProfileDashboard from '../../components/ProfileDashboard/ProfileDashboard';
import EventsList from '../../components/EventsList/EventsList';
import Modal from '../../components/Modal/Modal';

import * as eventsAPI from '../../utilities/events-api';


const EventsPage = ({user}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(function() {
        (async function getEvents() {
            const allEvents = await eventsAPI.getEvents();
            setEvents(allEvents);
        })();
    }, []);

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
            <EventsList events={events} user={user} setModalVisible={setModalVisible}/>
        </main>
    )
}

export default EventsPage;