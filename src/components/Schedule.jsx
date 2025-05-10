// src/components/Schedule.jsx
import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export default function Schedule() {
  const [proposedSchedule, setProposedSchedule] = useState([]);
  const [detailedSchedule, setDetailedSchedule] = useState({});

  const timeSlots = [
    '09:30 - 10:30',
    '10:30 - 11:00',
    '11:00 - 11:15',
    '11:15 - 01:00',
    '01:00 - 02:00',
    '02:00 - 03:15',
    '03:15 - 03:30',
    '03:30 - 05:00',
  ];

  useEffect(() => {
    // Fetch Proposed Schedule (schedule)
    const scheduleRef = ref(db, 'schedule');
    onValue(scheduleRef, (snap) => {
      const val = snap.val();
      if (val) {
        setProposedSchedule(Object.values(val));
      } else {
        setProposedSchedule([]);
      }
    });

    // Fetch Detailed Timetable (schedule_detailed)
    const detailedRef = ref(db, 'schedule_detailed');
    onValue(detailedRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setDetailedSchedule(data);
      }
    });
  }, []);

  const renderTimetableRow = (date, events) => (
    <tr key={date}>
      <td className="border border-gray-800 font-semibold px-2 py-2 whitespace-nowrap">
        {new Date(date).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          weekday: 'long',
        })}
      </td>
      {timeSlots.map((slot, index) => (
        <td key={index} className="border border-gray-800 px-2 py-2 text-sm">
          {events[slot] || ''}
        </td>
      ))}
    </tr>
  );

  return (
    <section id="schedule" className="py-12 px-6 bg-gray-100 mt-24 mb-20">
      {/* 🔹 Section 1: Proposed Schedule */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Proposed Schedule</h2>
        <table className="w-full table-auto border border-gray-800 text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-800 px-4 py-2">Activity</th>
              <th className="border border-gray-800 px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {proposedSchedule.map((s, i) => (
              <tr key={i}>
                <td className="border border-gray-800 px-4 py-2">{s.activity}</td>
                <td className="border border-gray-800 px-4 py-2">{s.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔹 Section 2: Detailed Timetable */}
      <div className="overflow-x-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Detailed Timetable</h2>
        <table className="table-fixed border-collapse border border-gray-800 text-center w-full "  style={{fontFamily:"'Times New Roman', Times, serif"}}>
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-800 px-2 py-3 w-48">Session</th>
              {timeSlots.map((slot, idx) => (
                <th key={idx} className="border border-gray-800 px-2 py-3 text-sm">{slot}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(detailedSchedule).map(([date, events]) =>
              renderTimetableRow(date, events)
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
