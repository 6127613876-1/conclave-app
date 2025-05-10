import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { name: 'home', path: '/' },
  { name: 'panel', path: '/panel' },
  { name: 'hackathon', path: '/hackathon' },
  { name: 'committee', path: '/committee' },
  { name: 'registration', path: '/registration' },
  { name: 'companies', path: '/companies' },
  { name: 'schedule', path: '/schedule' },
  // { name: 'sponsors', path: '/sponsors' },
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
    
    <>
    <div className="bg-[#8B1C1C] text-white w-full px-4 py-2 flex justify-between items-center">
      {/* Left Images */}
      <div className="flex items-center space-x-4">
        <img src="https://scope2025.tce.edu/images/LOGO_TCE.png" alt="Logo 1" className="h-12 md:h-16" />
        <img src="https://scope2025.tce.edu/images/logos.png" alt="Logo 2" className="h-12 md:h-16" />
      </div>

      {/* Center Text */}
      <div className="text-center flex-1">
        <h1 className="text-md md:text-lg font-semibold">Thiagarajar College Of Engineering, Madurai</h1>
        <p className="text-sm">
          <FaEnvelope className="inline mr-1" />
          <span className="underline">scopetce@tce.edu</span>
        </p>
      </div>

      {/* Right Social Icons */}
      <div className="flex items-center space-x-3 md:space-x-5">
        <FaTwitter className="cursor-pointer hover:text-gray-300" />
        <FaFacebookF className="cursor-pointer hover:text-gray-300" />
        <FaInstagram className="cursor-pointer hover:text-gray-300" />
        <FaYoutube className="cursor-pointer hover:text-gray-300" />
        <FaWhatsapp className="cursor-pointer hover:text-gray-300" />
        <FaEnvelope className="cursor-pointer hover:text-gray-300" />
      </div>
    </div>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/40 backdrop-blur-md text-white mt-20" style={{position:"absolute"}}>
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
            className="text-sm border border-red-400 px-3 py-1 rounded hover:bg-red-50 hover:text-red-600 transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
    </>
  );
}
