import "./EventsPage.css";
import { useEffect, useState } from "react";
import ProfileBox from "../../components/ProfileBox/ProfileBox";
import ProfileDashboard from "../../components/ProfileDashboard/ProfileDashboard";
import EventsList from "../../components/EventsList/EventsList";
import Modal from "../../components/Modal/Modal";
import EventDetails from "../../components/EventDetails/EventDetails";

import * as eventsAPI from "../../utilities/events-api";

import io from 'socket.io-client';
const socket = io.connect('http://localhost:3001');

const EventsPage = ({ user, updateUser }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(
    function () {
      async function getEvents() {
        const allEvents = await eventsAPI.getUserEvents();
        setEvents(allEvents);
        updateUser();
        setRefresh(false);
      }
      getEvents();
    },
    [modalVisible, selectedEvent, refresh]
  );

  function handleRefresh() {
    setRefresh(true);
    updateUser();
  }

  async function handleUpdateSave(updatedEvent) {
    await eventsAPI.updateEvent(updatedEvent);
  }

  async function handleDelete() {
    await eventsAPI.deleteEvent(selectedEvent);
    handleModal("", false);
  }

	async function handleJoinEvent() { 
		const updatedEvent = await eventsAPI.joinEvent(selectedEvent._id, user._id);
		setSelectedEvent(updatedEvent);
	}

  async function handleLeaveEvent(){
    const updatedEvent = await eventsAPI.leaveEvent(selectedEvent._id, user._id);
    setSelectedEvent(updatedEvent);
  }

  function handleModal(type, isVisible) {
    setModalType(type);
    setModalVisible(isVisible);
  }

  function handleSelect(eventId) {
    setSelectedEvent(events.filter((e) => e._id === eventId)[0]);
  }

  return (
    <main className="events-page">
      {modalVisible && (
        <Modal
          setSelectedEvent={setSelectedEvent}
          modalType={modalType}
          setEvents={setEvents}
          handleModal={handleModal}
        />
      )}
      {selectedEvent.length === 0 ? (
        <>
          <div className="user-profile-container">
            <ProfileBox user={user} />
            <ProfileDashboard user={user} />
          </div>
          <div className="events-options-container">
            <button onClick={() => handleModal("event", true)}>
              Add Event
            </button>
            <button onClick={handleRefresh}>Refresh</button>
          </div>
          <EventsList
            handleModal={handleModal}
            setSelectedEvent={handleSelect}
            events={events}
            user={user}
          />
        </>
      ) : (
        <EventDetails
          socket={socket}
					user={user}
          handleLeaveEvent={handleLeaveEvent}
					handleJoinEvent={handleJoinEvent}
					setSelectedEvent={setSelectedEvent}
          selectedEvent={selectedEvent}
          handleDelete={handleDelete}
          handleUpdateSave={handleUpdateSave}
        />
      )}
    </main>
  );
};

export default EventsPage;
