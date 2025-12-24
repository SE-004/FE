import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Event from "./pages/Event";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<h1> Hello, World </h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedLayout />}>
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<Event />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
