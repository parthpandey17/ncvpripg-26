import React, { useEffect } from 'react';

function Day1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const day1Events = [
    { time: '08:00', event: 'Registration & Breakfast', venue: 'Main Hall' },
    { time: '09:00', event: 'Inaugural Ceremony', venue: 'Auditorium' },
    { time: '09:45', event: 'Plenary Talk - Dr. Sanghamitra Bandyopadhyay', venue: 'Main Hall' },
    { time: '11:00', event: 'Coffee Break', venue: 'Foyer' },
    { time: '11:30', event: 'Challenge Sessions', venue: 'Parallel Rooms' },
    { time: '13:00', event: 'Lunch', venue: 'Dining Hall' },
    { time: '14:00', event: 'Tutorials (Session 1)', venue: 'Various Rooms' },
    { time: '15:30', event: 'Tea Break', venue: 'Foyer' },
    { time: '16:00', event: 'Student Research Symposium Presentations', venue: 'Main Hall' },
    { time: '18:00', event: 'Cultural Program', venue: 'Auditorium' },
    { time: '20:00', event: 'Gala Dinner', venue: 'Banquet Hall' }
  ];

  return (
    <div className="page-container">
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Day 1 - July 22, 2026 (Monday)</h1>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <table className="table table-striped table-hover">
                <tbody>
                  {day1Events.map((item, idx) => (
                    <tr key={idx}>
                      <td style={{fontWeight: 'bold', color: '#70b60a', width: '15%'}}>{item.time}</td>
                      <td style={{width: '55%'}}>{item.event}</td>
                      <td style={{color: '#666', fontSize: '14px'}}>{item.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-10 col-md-12">
              <p style={{textAlign: 'center'}}>
                <a href="/program" style={{color: '#70b60a', textDecoration: 'none', fontWeight: 'bold'}}>
                  ← Back to Full Schedule
                </a>
              </p>
            </div>
          </div>
        </div>
       
      </section>
    </div>
  );
}

export default Day1;
