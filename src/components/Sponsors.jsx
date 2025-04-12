import { FaHandshake } from 'react-icons/fa';

export default function Sponsors() {
  const sponsors = [
    {
      name: "Infosys",
      tier: "Platinum",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png",
      url: "#",
    },
    {
      name: "X",
      tier: "Gold",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1fI9vbf_FFi1cg96P_05JlzSHyM678eRzA&s",
      url: "#",
    },
    {
      name: "TCS",
      tier: "Silver",
      logo: "https://the420.in/wp-content/uploads/2025/04/TCS.jpg",
      url: "#",
    },
    

  ];

  return (
    <section id="sponsors" className="py-16 px-4 bg-gray-100 m-32">
      <h2 className="text-3xl font-bold text-center mb-10">Sponsors</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sponsors.map((sp, i) => (
          <a
            key={i}
            href={sp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <div className="w-full h-48 bg-white flex items-center justify-center p-4">
              <img
                src={sp.logo}
                alt={sp.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="relative px-6 pb-6 pt-12 -mt-10 bg-white mx-4 rounded-lg shadow-lg z-10">
              <h3 className="text-xl font-semibold text-center mt-2">{sp.name}</h3>
              <p className="text-sm text-gray-600 text-center mt-1">{sp.tier} Sponsor</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="mailto:conclave@sponsor.com"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded shadow-md transition duration-300"
        >
          Interested in Sponsoring?
        </a>
      </div>
    </section>
  );
}
