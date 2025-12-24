import { Link } from "react-router";

function EventCard({ event }) {
  return (
    <div className="p-2 grid gap-2 bg-slate-800 rounded">
      <p>Title: {event.title}</p>
      <p>Location: {event.location}</p>
      <p>Date: {new Date(event.date).toDateString()}</p>
      <Link to={`/events/${event.id}`}>View More</Link>
    </div>
  );
}

export default EventCard;
