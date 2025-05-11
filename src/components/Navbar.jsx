import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { name: 'home', path: '/' },
  { name: 'panel', path: '/panel' },
  { name: 'hackathon', path: '/hackathon' },
  { name: 'committee', path: '/committee' },
  { name: 'registration', path: '/registration' },
  { name: 'companies', path: '/companies' },
  { name: 'schedule', path: '/schedule' },
  { name: 'about', path: '/about' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="bg-[#8B1C1C] text-white w-full px-4 py-2 flex justify-between items-center">
        {/* Logos */}
        <div className="flex items-center space-x-4">
          <img src="https://scope2025.tce.edu/images/LOGO_TCE.png" alt="Logo 1" className="h-12 md:h-16" />
          <img src="https://scope2025.tce.edu/images/logos.png" alt="Logo 2" className="h-12 md:h-16" />
        </div>

        {/* Center Title */}
        <div className="text-center flex-1">
          <h1 className="text-md md:text-lg font-semibold">Thiagarajar College Of Engineering, Madurai</h1>
          <p className="text-sm">
            <FaEnvelope className="inline mr-1" />
            <span className="underline">scopetce@tce.edu</span>
          </p>
        </div>

        {/* Social Media */}
        <div className="flex items-center space-x-3 md:space-x-5">
          <FaTwitter className="cursor-pointer hover:text-gray-300" />
          <FaFacebookF className="cursor-pointer hover:text-gray-300" />
          <FaInstagram className="cursor-pointer hover:text-gray-300" />
          <FaYoutube className="cursor-pointer hover:text-gray-300" />
          <FaWhatsapp className="cursor-pointer hover:text-gray-300" />
          <FaEnvelope className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/40 backdrop-blur-md text-white mt-20" style={{ position: "absolute" }}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>HR CONCLAVE</h1>
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                className="group cursor-pointer uppercase text-sm tracking-wide relative text-gray-300 hover:text-white transition"
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-orange-500 transition-opacity duration-300 ${
                    location.pathname === link.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                ></span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
