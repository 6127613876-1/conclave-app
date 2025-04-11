import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";

export default function Committee() {
  const allMembers = [
    { name: "Mr. Hari Thiagarajan", job: "Chairman & Correspondent", image: "https://www.tce.edu/sites/default/files/2023-03/Trustee.jpeg",role:"Chief Patron" },
    { name: "Dr. L Ashok Kumar", job: "Principal", image: "https://www.tce.edu/sites/default/files/2024-09/PRINCIPAL.jpg",role:"Patron" },
    { name: "Dr. G. K. Raajesh", job: "Dean (CD)", image: "https://www.tce.edu/sites/default/files/2024-09/gk.jpeg" ,role:"Convener" },
    { name: "Mr. S. A. R. Sheik Masthan", job: "Asst. Professor, Mechatronics", image: "https://www.tce.edu/sites/default/files/2023-05/sarsmech.jpg",role:"Coordinator" },
    { name: "Mrs. C. V. Nisha Angeline", job: "Asst. Professor, IT", image: "https://www.tce.edu/sites/default/files/2023-07/cvnait.jpg" ,role:"Coordinator"},
    { name: "Dr. S. Ilankumaran", job: "Asst. Professor, IT", image: "https://www.tce.edu/sites/default/files/2023-07/siit.jpg",role:"Coordinator" },
    { name: "Mr. S. Arunkumar", job: "Asst. Professor, Mechanical", image: "https://www.tce.edu/sites/default/files/2023-10/sakmech.jpg",role:"Coordinator" },
    { name: "Dr. N. B. Balamurugan", job: "Assoc. Dean (CD), Professor, ECE", image: "https://www.tce.edu/sites/default/files/2023-07/nbbece.jpg",role:"Organizing Secretary" },
    { name: "Dr. M. Vijayalakshmi", job: "Professor, CSE", image: "https://www.tce.edu/sites/default/files/2023-07/mvcse.jpg",role:"Organizing Secretary" },
  ];

  return (
    <section id="committee" className="py-16 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold mb-12 text-center">Organizing Committee</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {allMembers.map((member, index) => (
          <PersonCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}

function PersonCard({ name, job, image,role }) {
  return (
    <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      <img src={image} alt={name} className="w-full h-80 object-cover" />
      <div className="p-4 text-center flex flex-col justify-between flex-1">
        <div>
          <h4 className="font-semibold text-gray-800 text-lg">{name}</h4>
          <p className="text-sm text-gray-600">{job}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
        <div className="flex justify-center gap-5 mt-4 text-gray-500">
          <FaXTwitter className="hover:text-black cursor-pointer text-lg" />
          <FaFacebookF className="hover:text-blue-700 cursor-pointer text-lg" />
          <FaInstagram className="hover:text-pink-600 cursor-pointer text-lg" />
          <FaLinkedin className="hover:text-blue-800 cursor-pointer text-lg" />
        </div>
      </div>
    </div>
  );
}
