import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../firebase';

export default function HackathonDetails() {
  const { id } = useParams();
  const [hackathon, setHackathon] = useState(null);

  useEffect(() => {
    const hackathonRef = ref(db, `hackathons/${id}`);
    get(hackathonRef).then((snapshot) => {
      if (snapshot.exists()) {
        setHackathon(snapshot.val());
      }
    });
  }, [id]);

  if (!hackathon) {
    return <p className="text-center mt-10">Loading Hackathon Details...</p>;
  }

  const themesArray = Array.isArray(hackathon.themes)
    ? hackathon.themes
    : hackathon.themes
    ? Object.values(hackathon.themes)
    : [];

  const prizesArray = Array.isArray(hackathon.prizes)
    ? hackathon.prizes
    : hackathon.prizes
    ? Object.values(hackathon.prizes)
    : [];

  return (
    <div className="bg-gray-50 py-10 px-6 m-32">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center">
        <img
          src={hackathon.image}
          alt={hackathon.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold">{hackathon.title}</h1>
        <p className="text-gray-600 mt-2">{hackathon.date}</p>
      </div>

      <Section title="Overview">
        <p className="text-gray-700">{hackathon.description}</p>
      </Section>

      <Section title="Themes / Tracks">
        {themesArray.length > 0 ? (
          <ul className="list-disc list-inside space-y-1">
            {themesArray.map((theme, i) => (
              <li key={i}>{theme}</li>
            ))}
          </ul>
        ) : (
          <p>No specific themes listed.</p>
        )}
      </Section>

      <Section title="Eligibility">
        <p>Open to all students, developers, and professionals.</p>
      </Section>

      <Section title="Schedule">
        <ul className="list-none space-y-2 text-gray-800">
          <li>📝 Registration Opens: {hackathon.registrationStart || 'TBA'}</li>
          <li>📅 Hackathon Start: {hackathon.startDate || 'TBA'}</li>
          <li>⏰ Submission Deadline: {hackathon.endDate || 'TBA'}</li>
        </ul>
      </Section>

      <Section title="Prizes">
        {prizesArray.length > 0 ? (
          <ul className="list-disc list-inside space-y-1">
            {prizesArray.map((prize, i) => (
              <li key={i}>Rs.{prize}</li>
            ))}
          </ul>
        ) : (
          <p>No prizes information available.</p>
        )}
      </Section>

      <Section title="Judging Criteria">
        <ul className="list-disc list-inside space-y-1">
          <li>Innovation</li>
          <li>Technical Complexity</li>
          <li>Impact</li>
          <li>Presentation</li>
        </ul>
      </Section>

      <Section title="Rules">
        <ul className="list-disc list-inside space-y-1">
          <li>Original work only – no plagiarism</li>
          <li>Teams of up to 4 participants</li>
          <li>Submission must be made before the deadline</li>
        </ul>
      </Section>

      <Section title="FAQs">
        <ul className="space-y-4">
          <li>
            <strong>Q: Who can participate?</strong><br />
            A: Anyone – students, working professionals, freelancers.
          </li>
          <li>
            <strong>Q: Is it online?</strong><br />
            A: Yes, it will be held virtually.
          </li>
          <li>
            <strong>Q: What if I don’t have a team?</strong><br />
            A: You can register solo, we’ll help form teams.
          </li>
        </ul>
      </Section>

      <Section title="Contact">
        <p>📧 Email: <a href="mailto:hackathon@yourdomain.com" className="text-blue-500 underline">hackathon@yourdomain.com</a></p>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
