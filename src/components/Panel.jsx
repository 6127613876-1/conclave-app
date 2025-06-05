import {
  FaRobot,
  FaRocket,
  FaCloud,
} from 'react-icons/fa';

const sessions = [
  {
    id: 1,
    time: "10:00 AM - 11:30 AM",
    name: "Dr. XYZ (IITM)",
    topic: "Future of AI in India",
    audience: "AI enthusiasts, students",
    icon: <FaRobot className="text-orange-500 text-3xl" />,
  },
  {
    id: 2,
    time: "12:00 PM - 1:30 PM",
    name: "Ms. ABC (Startup X)",
    topic: "Building Scalable Startups",
    audience: "Entrepreneurs, tech leads",
    icon: <FaRocket className="text-orange-500 text-3xl" />,
  },
  {
    id: 3,
    time: "2:30 PM - 4:00 PM",
    name: "Mr. DEF (Google)",
    topic: "Cloud & Web 3.0: What’s Next",
    audience: "Developers, Researchers",
    icon: <FaCloud className="text-orange-500 text-3xl" />,
  },
  {
    id: 4,
    time: "2:30 PM - 4:00 PM",
    name: "Mr. GPS",
    topic: "Web Development Trends",
    audience: "Developers, Researchers",
    icon: <FaCloud className="text-orange-500 text-3xl" />,
  }
];

export default function Panel() {
  return (
    <section id="panel" className="py-16 px-4 bg-gray-100 m-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">CHECK OUR PANELS</h2>
        <div className="grid md:grid-cols-2 gap-8 cursor-pointer">
          {sessions.map((s) => (
            <div
              key={s.id}
              className="flex items-start border border-orange-300 rounded-md p-6 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mr-4">
                {s.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{s.topic}</h3>
                <p className="text-sm text-gray-600 mb-1">{s.name} | {s.time}</p>
                <p className="text-sm text-gray-500">Suitable for: {s.audience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
