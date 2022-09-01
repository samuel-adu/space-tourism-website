import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <Link to="./">Home</Link>
        <Link to="./destination">Destination</Link>
        <Link to="./crew">Crew</Link>
        <Link to="./technology">Technology</Link>
      </nav>
    </div>
  );
}

export default Header;
