import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';

const navLinks = [
  { name: 'home', path: '/' },
  { name: 'panel', path: '/panel' },
  { name: 'hackathon', path: '/hackathon' },
  { name: 'committee', path: '/committee' },
  { name: 'registration', path: '/registration' },
  { name: 'companies', path: '/companies' },
  { name: 'schedule', path: '/schedule' },
  { name: 'sponsors', path: '/sponsors' },
  { name: 'about', path: '/about' },
];

export default function Navbar() {
  const [active, setActive] = useState('/');
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/login');
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/40 backdrop-blur-md text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>HR CONCLAVE</h1>

        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setActive(link.path)}
              className={({ isActive }) =>
                `group cursor-pointer uppercase text-sm tracking-wide relative text-gray-300 hover:text-white transition ${
                  isActive ? 'text-white' : ''
                }`
              }
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full bg-orange-500 transition-opacity duration-300 ${
                  active === link.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              ></span>
            </NavLink>
          ))}

          <div className='pl-10'></div>
          <button
            onClick={handleLogout}
            className="text-sm border border-red-400 px-3 py-1 rounded hover:bg-red-50 hover:text-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
