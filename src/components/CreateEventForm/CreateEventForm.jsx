import React from 'react'

import useInput from '../../hooks/useInput';

const initialInfoState = {
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
}

const CreateEventForm = () => {
  const [eventInfo, setEventInfo] = useState(initialInfoState);
  const title = useInput("text");
  const alias = useInput("text");
  const eventDate = useInput("date");
  const eventTime = useInput("time");
  const coverFee = useInput("number");
  const gracePeriod = useInput("number");
  const finalWarning = useInput("number");
  const channel = "";
  return (
    <div>CreateEventForm</div>
  )
}

export default CreateEventForm