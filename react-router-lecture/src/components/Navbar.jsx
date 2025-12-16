import { NavLink, Link } from "react-router";

function Navbar() {
  return (
    <nav className="flex justify-between px-4 py-2 bg-slate-800 text-white">
      <span>Logo</span>
      <div className="flex gap-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
