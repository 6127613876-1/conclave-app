import { useEffect, useState } from "react";

const images = [
  "https://source.unsplash.com/800x600/?city,technology",
  "https://source.unsplash.com/800x600/?city,heritage",
  "https://source.unsplash.com/800x600/?city,night",
];

export default function Hometown() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hometown" className="py-16 px-6 bg-gray-100">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Left: Image Carousel */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={images[currentImage]}
            alt="City view"
            className="w-full h-[300px] object-cover transition-all duration-700"
          />
        </div>

        {/* Right: Text Info */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our City</h2>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to <span className="font-semibold">Innovation City</span>! Known for its tech parks and heritage sites.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li><strong>Attractions:</strong> Tech Museum, City Fort, Riverfront</li>
            <li><strong>How to Reach:</strong> Nearest Airport: INX | Railway: City Central</li>
            <li><strong>Stays:</strong> Budget hotels and campus hostels available</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
