import { useState } from "react";
import "./NewEventForm.css";

const NewEventForm = ({ user }) => {
  const [eventInfo, setEventInfo] = useState({
    title: "",
    host: "",
    eventDate: "",
    location: "",
    coverFee: 0,
    attendees: [],
    active: false,
    graceP: "",
    finalWarning: "",
    channel: "",
  });
  const [error, setError] = useState();

  const handleChange = (e) => {
    setEventInfo({ ...eventInfo, [e.target.name]: e.target.value });
    setError("");
  };

  return (
    <>
      <h1>New Event Form</h1>
      <form className="new-event-form" autoComplete="off">
        <label>
          Title
          <input
            type="text"
            name="title"
            value={eventInfo.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date
          <input
            type="text"
            name="password"
            value={eventInfo.eventDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location
          <input
            type="text"
            name="location"
            value={eventInfo.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Cover Fee
          <input
            type="number"
            name="coverFee"
            value={eventInfo.coverFee}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Grace Period
          <input
            type="number"
            name="gracePeriod"
            value={eventInfo.gracePeriod}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Final Warning
          <input
            type="number"
            name="finalWarning"
            value={eventInfo.finalWarning}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Event</button>
      </form>
    </>
  );
};

export default NewEventForm;
