import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-8">
            <Link to="/" className="text-primary-600 hover:text-primary-700 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Services
            </Link>
            <Link to="/help" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Help
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-600 hover:text-primary-600">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-primary-600 text-white hover:bg-primary-700">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;