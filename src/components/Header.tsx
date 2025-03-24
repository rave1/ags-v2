import SvgComponent from "../components/Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header = (toggleMenu) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  <header className="bg-zinc-900 text-white border-b border-zinc-800">
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col items-center justify-center">
        <SvgComponent />
        <div className="flex justify-between items-center w-full">
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className="hidden md:flex space-x-8 mx-auto">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              O nas
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Kontakt
            </a>
            <Link to="photos">Galeria</Link>
          </nav>

          <div className="md:hidden w-8" />
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4">
          <a href="#about" className="hover:text-blue-400 transition-colors">
            O nas
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Kontakt
          </a>
        </nav>
      )}
    </div>
  </header>;
};
