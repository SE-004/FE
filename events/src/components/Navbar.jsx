import { NavLink } from "react-router";
import { use } from "react";
import { AuthContext } from "../context/AuthProvider";

function Navbar() {
  const { user, loading, logout } = use(AuthContext);

  return (
    <nav className="px-4 py-2 flex justify-between bg-slate-800">
      <span className="text-2xl font-bold">LOGO</span>
      <ul className="flex gap-2">
        {!loading && (
          <>
            <NavLink to="/"> Home</NavLink>
            {user ? (
              <>
                <NavLink to="/events"> Events</NavLink>
                <NavLink to="/login" onClick={logout}>
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login"> Login</NavLink>
                <NavLink to="/register"> Register</NavLink>
              </>
            )}
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
