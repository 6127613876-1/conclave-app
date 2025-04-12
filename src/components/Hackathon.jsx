import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import { FaMicrochip } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Hackathon() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataRef = ref(db, 'hackathons');
    onValue(dataRef, (snapshot) => {
      const val = snapshot.val();
      if (val) {
        const items = Object.entries(val).map(([id, entry]) => ({
          id,
          ...entry,
        }));
        setData(items);
      }
    });
  }, []);

  return (
    <section id="hackathon" className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Hackathon</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

function Card({ id, title, description, image }) {
  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => setReadMore((prev) => !prev);

  const shortText =
    description.length > 100 ? description.substring(0, 100) + '...' : description;

  return (
    <Link to={`/hackathon/${id}`}>
      <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="relative px-6 pb-6 pt-12 -mt-10 bg-white mx-4 rounded-lg shadow-lg z-10">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center shadow-md">
              <FaMicrochip className="text-white text-2xl" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mt-2">{title}</h3>
          <p className="text-sm text-gray-600 text-center mt-2">
            {readMore ? description : shortText}
          </p>
          {description.length > 100 && (
            <p
              onClick={(e) => {
                e.preventDefault(); // Prevent redirect when toggling text
                toggleReadMore();
              }}
              className="text-orange-500 text-sm text-center mt-2 cursor-pointer hover:underline"
            >
              {readMore ? 'Read Less' : 'Read More'}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}