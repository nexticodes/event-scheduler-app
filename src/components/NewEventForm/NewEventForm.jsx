import { useState } from 'react';
import './NewEventForm.css';

const NewEventForm = ({ user, mode }) => {
  const [eventInfo, setEventInfo] = useState({
    title: '',
    host: '',
    eventDate: '',
    eventTime: '',
    location: '',
    coverFee: 0,
    attendees: [],
    active: false,
    gracePeriod: '',
    finalWarning: '',
    channel: '',
  });
  const [eventCode, setEventCode] = useState('');
  const [form, setForm] = useState('');
  const [error, setError] = useState();

  const handleChange = (e) => {
    form === 'createEvent' && setEventInfo({ ...eventInfo, [e.target.name]: e.target.value });
    form === 'joinEvent' && setEventCode(e.target.value)
    setError('');
  };

  const handleSubmit = (e) => {
      e.preventDefault();
  }

  const createEventForm = 
  <>
     <label>
          Title
          <input
            type='text'
            name='title'
            value={eventInfo.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date
          <input
            type='date'
            name='eventDate'
            value={eventInfo.eventDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Time
          <input
            type='time'
            name='eventDate'
            value={eventInfo.time}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location
          <input
            type='text'
            name='location'
            value={eventInfo.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Cover Fee
          <input
            type='number'
            name='coverFee'
            value={eventInfo.coverFee}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Grace Period
          <input
            type='number'
            name='gracePeriod'
            value={eventInfo.gracePeriod}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Final Warning
          <input
            type='number'
            name='finalWarning'
            value={eventInfo.finalWarning}
            onChange={handleChange}
            required
          />
        </label>
        <button type='submit'>Submit</button>
        <span className='smaller' onClick={() => setForm('join')}>Join one instead</span>
  </>

  const joinEventForm = 
  <>
    <label>Enter the Event Code Below!</label>
    <input type='text' name='eventCode' value={eventCode} onChange={handleChange}/>
    <button type='submit'>Submit</button>
    <span className='smaller' onClick={() => setForm('create')}>Create one instead</span>
  </>

  const buttons = 
    <>
        <h2>Select an option below:</h2>
        <button onClick={() => setForm('create')}>Create Event</button>
        <button onClick={() => setForm('join')}>Join Event</button> 
    </>

  return (
    <>
      <h1>{form === '' ? 'Add' : form === 'create' ? 'Create' : 'Join'} Event</h1>
      <form 
        onSubmit={handleSubmit} 
        className={form === '' ? 'event-form-buttons' : form === 'create' ? 'new-event-form': 'join-event-form'}
        autoComplete='off'>
        {form === '' ? buttons : form === 'create' ? createEventForm : joinEventForm}
      </form>
    </>
  );
};

export default NewEventForm;
