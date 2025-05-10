import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

// Import React Slick
import Slider from 'react-slick';

// Import Slick styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const dataRef = ref(db, 'companies');
    onValue(dataRef, (snap) => {
      const val = snap.val();
      if (val) {
        setCompanies(Object.values(val));
      }
    });
  }, []);

  // Slider settings (equivalent to Swiper setup)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="companies" className="py-12 px-6 bg-gray-100 m-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Partnering Companies</h2>

      <Slider {...settings}>
        {companies.map((comp, i) => (
          <div key={i}>
            <div className="min-w-[250px] bg-white p-6 rounded-xl shadow text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 mx-2">
              <div className="w-[120px] h-[120px] flex items-center justify-center">
                <img
                  src={comp.logo}
                  alt={comp.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h4 className="mt-4 font-semibold text-lg">{comp.name}</h4>
              <p className="text-sm text-gray-600">{comp.domain} {comp.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
