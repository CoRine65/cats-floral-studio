import { Link } from "react-router-dom";

function SiteNav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/showcase">Showcase</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default SiteNav;
