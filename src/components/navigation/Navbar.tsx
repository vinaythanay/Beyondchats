import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Info, Settings, HelpCircle, MessageSquare } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Home", icon: <Home className="w-4 h-4 mr-2" /> },
    { path: "/about", label: "About", icon: <Info className="w-4 h-4 mr-2" /> },
    { path: "/services", label: "Services", icon: <Settings className="w-4 h-4 mr-2" /> },
    { path: "/help", label: "Help", icon: <HelpCircle className="w-4 h-4 mr-2" /> },
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <MessageSquare className="h-8 w-8 text-primary-600 mr-2" />
              <span className="text-xl font-bold text-primary-900">BotSetup</span>
            </Link>
            <div className="hidden md:flex space-x-8 ml-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActiveRoute(item.path)
                      ? "text-primary-600 border-b-2 border-primary-600"
                      : "text-gray-600 hover:text-primary-600 hover:border-b-2 hover:border-primary-200"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-primary-600"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              className="bg-primary-600 text-white hover:bg-primary-700"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;