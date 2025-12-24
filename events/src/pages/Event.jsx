import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

function Event() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/events/${id}`)
      .then((res) => {
        setEvent(res.data);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";

  return (
    <div>
      {event && (
        <>
          <p>title: {event.title}</p>
          <p>description: {event.description}</p>
          <p>location: {event.location}</p>
          <p>date: {event.date}</p>
        </>
      )}
    </div>
  );
}

export default Event;
