import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-lg w-full fixed top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold text-red-500 hover:text-red-600">
          Puedeees Cok
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-lg font-semibold text-red-500 hover:text-red-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/order-history"
            className="text-lg font-semibold text-red-500 hover:text-red-600 transition duration-300"
          >
            Order History
          </Link>
          <Link
            to="/order-history"
            className="text-lg font-semibold text-red-500 hover:text-red-600 transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/order-history"
            className="text-lg font-semibold text-red-500 hover:text-red-600 transition duration-300"
          >
            Menu
          </Link>
          <Link
            to="/cart"
            className="text-lg font-semibold text-red-500 hover:text-red-600 transition duration-300"
          >
            Cart
          </Link>
          <Link
            to="/login"
            className="text-lg font-semibold bg-blue-400 hover:bg-blue-500 text-white rounded-lg py-2 px-4 transition duration-300"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
