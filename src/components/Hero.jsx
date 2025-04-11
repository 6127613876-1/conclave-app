// src/components/Hero.jsx
import { useEffect, useState } from 'react';
import { FaClock, FaCalendarDay, FaHourglassHalf } from 'react-icons/fa';
import Img from "../assets/img/tce.jpeg";

export default function Hero() {
  const eventDate = new Date("2025-05-01T09:00:00").getTime();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff <= 0) {
        setEventStarted(true);
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setCountdown({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 text-white"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black/60 p-6 md:p-10 rounded-xl backdrop-blur-sm max-w-3xl w-full animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-bold font-raleway">National Innovation Conclave 2025</h2>
        <p className="mt-2 text-xl font-light font-roboto">Empowering Youth Through Innovation</p>
        <p className="mt-4 text-2xl text-gray-200 font-inter leading-relaxed">
          Date: May 1, 2025 <br />
          Venue: Thiagarajar College of Engineering <br />
          Chief Guest: Mr. Gokul
        </p>

        <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-lg font-semibold">
          Register Now
        </button>

        {/* Animated Countdown */}
        <div className="mt-8 flex items-center justify-center gap-6 text-white">
          {!eventStarted ? (
            <>
              <div className="bg-black/50 px-4 py-2 rounded-lg border border-orange-500 flex flex-col items-center ">
                <FaCalendarDay className="text-orange-400 text-xl mb-1" />
                <span className="text-3xl font-bold text-orange-300">{countdown.days}</span>
                <span className="text-sm">Days</span>
              </div>
              <div className="bg-black/50 px-4 py-2 rounded-lg border border-orange-500 flex flex-col items-center ">
                <FaClock className="text-orange-400 text-xl mb-1" />
                <span className="text-3xl font-bold text-orange-300">{countdown.hours}</span>
                <span className="text-sm">Hours</span>
              </div>
              <div className="bg-black/50 px-4 py-2 rounded-lg border border-orange-500 flex flex-col items-center ">
                <FaHourglassHalf className="text-orange-400 text-xl mb-1" />
                <span className="text-3xl font-bold text-orange-300">{countdown.minutes}</span>
                <span className="text-sm">Minutes</span>
              </div>
            </>
          ) : (
            <div className="text-2xl text-green-400 font-bold animate-bounce">
              Event Started 🎉
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
