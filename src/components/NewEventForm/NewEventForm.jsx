import { useState } from 'react';
import * as eventsAPI from '../../utilities/events-api';
import './NewEventForm.css';

const NewEventForm = ({ user, mode }) => {
  const [eventInfo, setEventInfo] = useState({
    title: '',
    eventDate: '',
    eventTime: '',
    location: '',
    coverFee: 0,
    attendees: [],
    active: false,
    gracePeriod: 0,
    finalWarning: 0,
    channel: '',
  });
  const [eventCode, setEventCode] = useState('');
  const [form, setForm] = useState('');
  const [error, setError] = useState();

  const handleChange = (e) => {
    form === 'create' && setEventInfo({ ...eventInfo, [e.target.name]: e.target.value });
    form === 'join' && setEventCode(e.target.value)
    setError('');
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (form === 'create'){
        setEventInfo({...eventInfo, active: true});
        const events = await eventsAPI.createEvent(eventInfo);
      }
  }

  function calculateDate(operation, numDays) {
    let eventDate = new Date(eventInfo.eventDate);
    console.log(eventDate);
    if (operation === 'minus') return eventDate.setDate(eventDate.getDate() - numDays)
    if (operation === 'add') return new Date(Date.now()).setDate(eventDate.getDate() + numDays);
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
            name='eventTime'
            value={eventInfo.eventTime}
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
