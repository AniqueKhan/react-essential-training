import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <Navbar />
      <h1>About Page</h1>
      <Outlet />
    </div>
  );
}
export function Contact() {
  return (
    <div>
      <Navbar />
      <h1>Contact Page</h1>
    </div>
  );
}

export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}
