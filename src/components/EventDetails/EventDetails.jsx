import "./EventDetails.css";
import { useState } from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import AttendeesList from "../AttendeesList/AttendeesList";

const EventDetails = ({
  handleJoinEvent,
  selectedEvent,
  handleUpdateSave,
  handleDelete,
  setSelectedEvent,
  user,
}) => {
  const [updatedEvent, setUpdatedEvent] = useState({
    ...selectedEvent,
  });
  const [chkbx, setChkbx] = useState(selectedEvent["active"]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleChange = (e) => {
    if (e.target.name === "active") {
      setChkbx(!chkbx);
      setUpdatedEvent({ ...updatedEvent, active: !chkbx });
      return;
    }
    setUpdatedEvent({ ...updatedEvent, [e.target.name]: e.target.value });
  };

  const checkDifference = () => {
    let isDifferent = false;
    for (const [key, val] of Object.entries(selectedEvent)) {
      if (val !== updatedEvent[key]) {
        isDifferent = true;
        break;
      }
    }
    return isDifferent;
  };

  const isUserInEvent = () => {
    return (
      selectedEvent.attendees.filter(a => a._id === user._id).length >= 1
    );
  };

  const isUserHost = () => {
    return selectedEvent.host === user._id;
  }

  const handleSave = async () => {
    setIsUpdating(false);
    // check to see if there are any differences between updatedEvent, and setUpdatedEvent;
    if (checkDifference()) {
      handleUpdateSave(updatedEvent);
      setUpdateSuccess(true);
    }
  };

  const formatDate = (date) => {
    let dateArray = date
      .toLocaleDateString()
      .split(/\D/)
      .slice(0, 3)
      .map((num) => num.padStart(2, "0"));

    return [dateArray[2], dateArray[0], dateArray[1]].join("-");
  };

  return (
    <div className="event-details-container">
      <div className="event-details-header">
        {isUpdating ? "Updating" : "Viewing"}
        <textarea
          disabled={!isUpdating}
          className="event-title"
          name="title"
          value={updatedEvent["title"]}
          onChange={handleChange}
        />
      </div>

      <form className="event-details-form">
        <div className="top">
          <div className="deets">
            <input
              maxLength={3}
              disabled={!isUpdating}
              className="alias"
              name="alias"
              value={updatedEvent["alias"].toUpperCase()}
              onChange={handleChange}
            />
          </div>

          <div className="datetime">
            <input
              type="date"
              disabled={!isUpdating}
              className="eventDate"
              name="eventDate"
              value={formatDate(new Date(updatedEvent["eventDate"]))}
              onChange={handleChange}
            />
            <input
              type="time"
              disabled={!isUpdating}
              className="eventTime"
              name="eventTime"
              value={updatedEvent["eventTime"]}
              onChange={handleChange}
            />
          </div>
        </div>
        {isUserInEvent() && (
          <span className="after-holder">
            <p
              type="text"
              onClick={() => {
                navigator.clipboard.writeText(updatedEvent['_id'])
                setCopied(true)
              }}
            >
              {!copied ? 'CLICK TO COPY EVENT CODE!' : 'EVENT CODE COPIED!'}
            </p>
          </span>
        )}
        <div className="middle">
          <AttendeesList attendees={selectedEvent.attendees}/>
          <div className="location-map-container">
            IMAGINARY MAP GOES HERE
            <input
              disabled={!isUpdating}
              name="location"
              value={updatedEvent["location"]}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-numbers">
            <span>
              <input
                disabled={!isUpdating}
                type="number"
                className="coverFee"
                name="coverFee"
                value={updatedEvent["coverFee"]}
                onChange={handleChange}
              />
            </span>
            <span>
              <input
                disabled={!isUpdating}
                type="number"
                className="gracePeriod"
                name="gracePeriod"
                value={updatedEvent["gracePeriod"]}
                onChange={handleChange}
              />
            </span>
            <span>
              <input
                disabled={!isUpdating}
                type="number"
                className="finalWarning"
                name="finalWarning"
                value={updatedEvent["finalWarning"]}
                onChange={handleChange}
              />
            </span>
          </div>
          <div className="bottom-active">
            <label>Active</label>
            <input
              disabled={!isUpdating}
              type="checkbox"
              name="active"
              checked={chkbx}
              onChange={handleChange}
            />
          </div>
        </div>
        <p className={`update-success ${updateSuccess && "show"}`}>
          Event Updated!
        </p>
      </form>
      {isUserInEvent() ? (
        <>
          {isUserHost() && 
            <>
              
              {isUpdating ? (
                <>
                <DeleteButton handleDelete={handleDelete} />
                <button onClick={handleSave}>SAVE</button>
                </>
                ) : (
                  <button
                  onClick={() => setIsUpdating(true) && setUpdateSuccess(false)}
                  >
                  EDIT
                  </button>
                  )}
            </>
          }
          {!isUserHost() && <button>LEAVE EVENT</button>}
        </>
      ) : 
            <button onClick={handleJoinEvent}>JOIN EVENT</button>
      }
      <p onClick={() => setSelectedEvent([])}>GO BACK TO EVENTS LIST</p>
    </div>
  );
};

export default EventDetails;
