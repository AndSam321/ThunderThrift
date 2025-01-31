import React from "react";
import {
  Search,
  Menu,
  UserCircle2,
  ShoppingCart,
  CloudLightning,
} from "lucide-react";

const categories = [
  "All Items",
  "Clothing",
  "Class Materials",
  "Furniture and Appliances",
  "Services",
];

function Navbar() {
  return (
    <nav className="bg-simpson-red shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <CloudLightning className="h-8 w-8 text-simpson-gold" />
            <span className="text-2xl font-bold text-simpson-gold">
              ThunderThrift
            </span>
          </div>

          {/* Nav Bar */}
          <div className="hidden md:flex items-center space-x-8 ml-4">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="text-gray-100 hover:text-simpson-gold transition-colors duration-200"
              >
                {category}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search items..."
                className="w-full px-4 py-2 rounded-full bg-opacity-50 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-simpson-gold"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-300" />
            </div>
          </div>

          {/* Login */}
          <button className="flex items-center space-x-2 bg-simpson-gold text-simpson-red px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-200">
            <UserCircle2 className="h-5 w-5" />
            <span>Login</span>
          </button>

          {/* Menu Button */}
          <button className="md:hidden text-simpson-gold">
            <Menu className="h-6 w-6" />
          </button>

          {/* Add to Cart Icon */}
          <button className="md:hidden text-simpson-gold mr-8">
            <ShoppingCart className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
