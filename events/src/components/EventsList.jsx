import EventCard from "./EventCard";

function EventsList({ events }) {
  return (
    <div className="grid grid-cols-3 p-4 gap-4">
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </div>
  );
}

export default EventsList;
