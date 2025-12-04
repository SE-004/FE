function Navbar({ logo, urls }) {
  return (
    <nav>
      <span>{logo}</span>
      <ul>
        {urls.map((url) => {
          return (
            <li key={url.path}>
              <a href={url.path}> {url.text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
