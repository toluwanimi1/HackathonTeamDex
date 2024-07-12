import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/reservations">Reservations</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/boardgames">Board Game Collection</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/feedback">Feedback</Link>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
