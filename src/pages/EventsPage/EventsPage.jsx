import './EventsPage.css';
import { useEffect, useState } from 'react';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import ProfileDashboard from '../../components/ProfileDashboard/ProfileDashboard';
import EventsList from '../../components/EventsList/EventsList';
import Modal from '../../components/Modal/Modal';

import * as eventsAPI from '../../utilities/events-api';


const EventsPage = ({user}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState('');
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState({});

    useEffect(function() {
        async function getEvents() {
            const allEvents = await eventsAPI.getEvents();
            setEvents(allEvents);
        }
        getEvents();
    }, [modalVisible]);

    async function handleUpdateSave(updatedEvent){
        await eventsAPI.updateEvent(updatedEvent);
    }

    function handleModal(type, isVisible){
        setModalType(type);
        setModalVisible(isVisible);
    }

    return (
        <main className="events-page">
            {modalVisible && 
            <Modal 
            handleUpdateSave={handleUpdateSave}
            selectedEvent={selectedEvent}
            modalType={modalType}
            setEvents={setEvents}
            handleModal={handleModal} 
            />}
            <div className="user-profile-container">
                <ProfileBox user={user} />
                <ProfileDashboard user={user} />
            </div>
            <div className='events-options-container'>
                <button onClick={() => handleModal('event', true)}>Add Event</button>
                <button>Search Event</button>
            </div>
            <EventsList 
            handleModal={handleModal} 
            setSelectedEvent={setSelectedEvent}
            events={events}
            user={user}/>
        </main>
    )
}

export default EventsPage;