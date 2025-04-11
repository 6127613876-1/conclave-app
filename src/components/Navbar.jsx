import { Link } from 'react-scroll';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';

const navLinks = [
  'home',
  'panel',
  'hackathon',
  'committee',
  'registration',
  'companies',
  'schedule',
  'sponsors',
  'about',
];

export default function Navbar() {
  const handleLogout = () => signOut(auth);
  const [active, setActive] = useState('home');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/40 backdrop-blur-md text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">HR CONCLAVE</h1>

        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(link => (
            <Link
              key={link}
              to={link}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onSetActive={() => setActive(link)}
              className="group cursor-pointer uppercase text-sm tracking-wide relative text-gray-300 hover:text-white transition"
            >
              <span className={`${active === link ? 'text-white' : ''}`}>
                {link}
              </span>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full bg-orange-500 transition-opacity duration-300 ${
                  active === link ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              ></span>
            </Link>
          ))}

          <div className='pl-10'></div>
          <button
            onClick={handleLogout}
            className="text-sm  border border-red-400 px-3 py-1 rounded hover:bg-red-50  hover:text-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
