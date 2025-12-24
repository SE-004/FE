import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="bg-slate-700 text-white flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default MainLayout;
