import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-4 font-black">
        <li><Link to="/" className="text-black">Dashboard</Link></li>
        <li><Link to="/home" className="text-black">Home</Link></li>
        <li><Link to="/about" className="text-black">About</Link></li>
        <li><Link to="/contact" className="text-black">Contact</Link></li>
      </ul>
    </nav>
  );
}