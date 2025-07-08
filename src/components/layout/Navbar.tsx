import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { MapPin, ShoppingCart } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between -ml-2">
        <div className="md:w-1/2 flex justify-center items-center gap-1 sm:gap-6">
          <img src={logo} alt="Logo" className="w-28 h-auto object-contain" />
          <div className="flex items-center gap-1 sm:gap-2 cursor-pointer">
            <MapPin className="w-5 h-5 text-red-500" />
            <span className="text-gray-700 font-medium flex items-center">
              Add Address
              <svg
                className="ml-1 w-5 h-5 fill-gray-700"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-center lg:justify-end items-center gap-3 md:gap-3 lg:gap-6">
          <Link to="/" className="text-gray-700 hover:text-black font-medium">
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-700 hover:text-black font-medium"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-black font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-black font-medium"
          >
            Contact
          </Link>
          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};
