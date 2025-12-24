import axios from "axios";

function EventForm({ setEvents }) {
  return (
    <form
      className="p-4 grid gap-2"
      onSubmit={(e) => {
        e.preventDefault();

        const event = {
          title: e.target.elements.title.value,
          description: e.target.elements.description.value,
          location: e.target.elements.location.value,
          date: e.target.elements.date.value,
        };

        axios
          .post("http://localhost:3001/api/events", event, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            setEvents((prev) => [...prev, res.data]);
          })
          .catch(console.error);
      }}
    >
      <input
        type="text"
        name="title"
        className="border border-gray-500 px-2 py-1"
        placeholder="Enter Title"
      />
      <input
        type="text"
        name="description"
        className="border border-gray-500 px-2 py-1"
        placeholder="Enter Description"
      />
      <input
        type="text"
        name="location"
        className="border border-gray-500 px-2 py-1"
        placeholder="Enter Location"
      />
      <input
        type="date"
        name="date"
        className="border border-gray-500 px-2 py-1"
      />
      <input
        type="submit"
        value="Create Event"
        className="border border-gray-500 px-2 py-1 bg-slate-800 text-white"
      />
    </form>
  );
}

export default EventForm;
