import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../services/MovieServices';

function Header() {
  return (
    <header className="w-full absolute top-0 z-50">
      <div className="px-10 py-3 flex items-center justify-between">
        <Link to={'/'}>
          <img src="/assets/logo.svg" alt="Logo" className="h-10" />
        </Link>
        <nav className="flex gap-15 text-gray-200 font-medium text-sm md:text-base">
          <Link to="/kinoteatrlar" className="hover:text-orange-600 transition">Kinoteatrlar</Link>
          <Link to="/aksiyalar" className="hover:text-orange-600 transition">Aksiyalar</Link>
          <Link to="/faq" className="hover:text-orange-600 transition">FAQ</Link>
          <Link to="/elage" className="hover:text-orange-600 transition">Əlaqə</Link>
          <Link to="/profil" className="hover:text-orange-600 transition">Profil</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
