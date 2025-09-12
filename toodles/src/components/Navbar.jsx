import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
        <Link to="/" className="logo">Toodles</Link>
        <Link to="/" style={ {marginLeft: "auto"} }>All Todos</Link>
        <Link to="/create">Create A Todo</Link>
        <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;