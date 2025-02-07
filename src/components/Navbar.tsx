import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Link to="/">MyPortfolio</Link>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-blue-400 transition">
              blog
            </Link>
          </li>
          <li>
            <Link to="/app-repository" className="hover:text-blue-400 transition">
              app-repository
            </Link>
          </li>
          <li>
            <Link to="/documentation" className="hover:text-blue-400 transition">
              documentation
            </Link>
          </li>
          <li>
            <Link to="/about-me" className="hover:text-blue-400 transition">
              AboutMe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
