import { useState, useEffect } from "react";
import EventForm from "../components/EventForm";
import EventsList from "../components/EventsList";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/events`)
      .then((res) => setEvents(res.data.results))
      .catch(console.error);
  }, []);

  return (
    <>
      <EventForm setEvents={setEvents} />
      <EventsList events={events} />
    </>
  );
}

export default Events;
