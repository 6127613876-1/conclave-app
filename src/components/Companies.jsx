import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export default function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const dataRef = ref(db, 'companies');
    onValue(dataRef, (snap) => {
      const val = snap.val();
      if (val) setCompanies(Object.values(val));
    });
  }, []);

  return (
    <section id="companies" className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Partnering Companies</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {companies.map((comp, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow text-center flex flex-col items-center">
            <div className="w-32 h-32 flex items-center justify-center">
              <img
                src={comp.logo}
                alt={comp.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h4 className="mt-4 font-semibold text-lg">{comp.name}</h4>
            <p className="text-sm text-gray-600">{comp.domain}  {comp.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
