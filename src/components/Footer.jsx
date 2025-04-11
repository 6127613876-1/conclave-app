import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left: Logo or Site Info */}
        <div>
          <h2 className="text-2xl font-bold">TCE Conclave 2025</h2>
          <p className="mt-2 text-gray-400">Empowering Innovation. Celebrating Talent.</p>
        </div>

        {/* Center: Nav Links */}
        <div className="flex flex-col space-y-2 md:items-center">
          <a href="#home" className="hover:underline text-gray-300">Home</a>
          <a href="#about" className="hover:underline text-gray-300">About</a>
          <a href="#schedule" className="hover:underline text-gray-300">Schedule</a>
          <a href="#hackathon" className="hover:underline text-gray-300">Hackathon</a>
          <a href="#committee" className="hover:underline text-gray-300">Committee</a>
          <a href="#registration" className="hover:underline text-gray-300">Registration</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex flex-col md:items-end">
          <p className="mb-2 text-gray-400">Follow Us</p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TCE Conclave. All rights reserved.
      </div>
    </footer>
  );
}
