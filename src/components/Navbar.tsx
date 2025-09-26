import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="flex p-4 bg-black text-white absolute min-w-screen">
      <Link to="/" className="flex items-center gap-2 font-mono">
        <FaHome /> Home
      </Link>
      <div className="flex-auto">
        <p className="text-3xl text-white font-bold font-mono">User Admin App</p>
      </div>
      <div className="flex gap-2">
        <Link to="/login" className="flex items-center gap-2 font-mono">
          <MdOutlineLogin /> Login
        </Link>
      </div>
    </nav>
  );
}
