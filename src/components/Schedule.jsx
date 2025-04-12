// src/components/Schedule.jsx
import { useEffect, useState } from 'react';
import { ref, onValue, push } from 'firebase/database';
import { db } from '../firebase';

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [time, setTime] = useState('');
  const [activity, setActivity] = useState('');

  useEffect(() => {
    const refPath = ref(db, 'schedule');
    onValue(refPath, snap => {
      const val = snap.val();
      if (val) {
        const data = Object.values(val);
        setSchedule(data);
      } else {
        setSchedule([]);
      }
    });
  }, []);


  return (
    <section id="schedule" className="py-12 px-6 bg-gray-100 m-32">
      <h2 className="text-3xl font-bold mb-6">Event Schedule</h2>


      {/* 🔹 Schedule Table */}
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Time</th>
            <th className="border px-4 py-2">Activity</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((s, i) => (
            <tr key={i}>
              <td className="border px-4 py-2">{s.time}</td>
              <td className="border px-4 py-2">{s.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
