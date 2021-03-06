import { useState } from "react";
import * as eventsAPI from "../../utilities/events-api";
import "./NewEventForm.css";

const NewEventForm = ({ mode, handleModal, setSelectedEvent }) => {
  const [eventInfo, setEventInfo] = useState({
    title: "",
    alias: "",
    eventDate: "",
    eventTime: "",
    location: {},
    coverFee: 0,
    attendees: [],
    active: false,
    gracePeriod: 0,
    finalWarning: 0,
    channel: "",
  });
  const [locationInfo, setLocationInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [eventCode, setEventCode] = useState("");
  const [showEventCode, setShowEventCode] = useState(false);
  const [form, setForm] = useState("");
  const [error, setError] = useState();

  const handleChange = (e) => {
    form === "create" &&
      setEventInfo({ ...eventInfo, [e.target.name]: e.target.value });
    form === "join" && setEventCode(e.target.value);
    setError("");
  };

  const handleAddressChange = (e) => {
    setLocationInfo({ ...locationInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form === "create") {
      setEventInfo({ ...eventInfo, location: locationInfo });
      const event = await eventsAPI.createEvent(eventInfo, locationInfo);
      setEventCode(event._id);
      setEventInfo({
        title: "",
        alias: "",
        eventDate: "",
        eventTime: "",
        location: {},
        coverFee: 0,
        attendees: [],
        active: false,
        gracePeriod: 0,
        finalWarning: 0,
      });
      setLocationInfo({
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      });
      setShowEventCode(true);
    } else if (form === "join") {
      const event = await eventsAPI.findEvent(eventCode);
      setSelectedEvent(event);
      handleModal("", false);
    }
  };

  function calculateDate(operation, numDays) {
    let eventDate = new Date(eventInfo.eventDate);
    if (operation === "minus")
      return eventDate.setDate(eventDate.getDate() - numDays);
    if (operation === "add")
      return new Date(Date.now()).setDate(eventDate.getDate() + numDays);
  }

  const createEventForm = (
    <>
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
        Alias
        <input
          type="text"
          name="alias"
          maxLength={3}
          value={eventInfo.alias.toUpperCase()}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date
        <input
          type="date"
          name="eventDate"
          value={eventInfo.eventDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Time
        <input
          type="time"
          name="eventTime"
          value={eventInfo.eventTime}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Address
        <div className="address-inputs">
          <input
            type="text"
            name="name"
            value={locationInfo.name}
            onChange={handleAddressChange}
            placeholder={"Name This Address!"}
            required
          />
          <input
            type="text"
            name="address"
            value={locationInfo.address}
            onChange={handleAddressChange}
            placeholder={"Address Line"}
            required
          />
          <input
            type="text"
            name="city"
            value={locationInfo.location}
            placeholder={"City"}
            onChange={handleAddressChange}
            required
          />
          <div>
            <input
              type="text"
              name="state"
              value={locationInfo.location}
              placeholder={"State"}
              onChange={handleAddressChange}
              required
            />
            <input
              type="text"
              name="zip"
              placeholder={"Zip"}
              value={locationInfo.location}
              onChange={handleAddressChange}
              required
            />
          </div>
        </div>
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
      <div id='gracePeriod'>
          Grace Period &nbsp;
          <div class="tooltip">?
            <span class="tooltiptext">Sets the X days (after the day the attendee joins an event) where attendee may back out and receive FULL refund. </span>
          </div>
        </div>
        <input
          type="number"
          name="gracePeriod"
          value={eventInfo.gracePeriod}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <div id='finalWarning'>
          Final Warning &nbsp;
          <div class="tooltip">?
            <span class="tooltiptext"> Sets the final day (before the event begins) attendees may back out and still receive some of their coins back. </span>
          </div>
        </div>
        <input
          type="number"
          name="finalWarning"
          value={eventInfo.finalWarning}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
      <span className="smaller" onClick={() => setForm("join")}>
        Join one instead
      </span>
    </>
  );

  const joinEventForm = (
    <>
      <label>Enter the Event Code Below!</label>
      <input
        type="text"
        name="eventCode"
        value={eventCode}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <span className="smaller" onClick={() => setForm("create")}>
        Create one instead
      </span>
    </>
  );

  const buttons = (
    <>
      <h2>Select an option below:</h2>
      <button onClick={() => setForm("create")}>Create Event</button>
      <button onClick={() => setForm("join")}>Join Event</button>
    </>
  );

  return (
    <>
      {!showEventCode ? (
        <>
          <h1>
            {form === "" ? "Add" : form === "create" ? "Create" : "Join"} Event
          </h1>
          <form
            onSubmit={handleSubmit}
            className={
              form === ""
                ? "event-form-buttons"
                : form === "create"
                ? "new-event-form"
                : "join-event-form"
            }
            autoComplete="off"
          >
            {form === ""
              ? buttons
              : form === "create"
              ? createEventForm
              : joinEventForm}
          </form>
        </>
      ) : (
        <>
          <h1>Event Created Successfully!</h1>
          <div className="event-code-container">
            <h2>Copy the Event code below and share it to your friends!</h2>
            <span className="after-holder">
              <input
                type="text"
                value={eventCode}
                readOnly
                onClick={() => {
                  navigator.clipboard.writeText(eventCode);
                }}
              />
            </span>
            <button onClick={() => handleModal("", false)}> Done! </button>
          </div>
        </>
      )}
    </>
  );
};

export default NewEventForm;
