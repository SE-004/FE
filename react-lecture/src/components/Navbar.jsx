function Navbar({ logo }) {
  return (
    <nav>
      <span>{logo}</span>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
