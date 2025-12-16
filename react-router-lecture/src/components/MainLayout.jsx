import Navbar from "./Navbar";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="grow">
        <Outlet />
      </main>

      <footer>footer</footer>
    </div>
  );
}

export default MainLayout;
