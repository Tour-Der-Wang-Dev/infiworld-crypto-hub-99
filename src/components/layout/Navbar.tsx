
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-infi-dark">INFIWORLD</span>
          <span className="ml-1 text-xs bg-infi-green text-white px-1.5 py-0.5 rounded">CRYPTO</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/freelance" className="text-infi-dark hover:text-infi-green transition-colors">Freelance</Link>
          <Link to="/marketplace" className="text-infi-dark hover:text-infi-green transition-colors">Marketplace</Link>
          <Link to="/reservations" className="text-infi-dark hover:text-infi-green transition-colors">Reservations</Link>
          <Link to="/map" className="text-infi-dark hover:text-infi-green transition-colors">Map</Link>
          <Link to="/verify" className="text-infi-dark hover:text-infi-green transition-colors">Verify</Link>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">EN | TH</Button>
            <Button className="bg-infi-green hover:bg-infi-green-hover">เข้าสู่ระบบ</Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link to="/freelance" className="py-2 text-infi-dark hover:text-infi-green transition-colors">Freelance</Link>
            <Link to="/marketplace" className="py-2 text-infi-dark hover:text-infi-green transition-colors">Marketplace</Link>
            <Link to="/reservations" className="py-2 text-infi-dark hover:text-infi-green transition-colors">Reservations</Link>
            <Link to="/map" className="py-2 text-infi-dark hover:text-infi-green transition-colors">Map</Link>
            <Link to="/verify" className="py-2 text-infi-dark hover:text-infi-green transition-colors">Verify</Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" size="sm" className="w-full justify-center">EN | TH</Button>
              <Button className="w-full bg-infi-green hover:bg-infi-green-hover">เข้าสู่ระบบ</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
