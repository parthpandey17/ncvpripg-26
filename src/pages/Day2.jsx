import React, { useEffect } from 'react';

function Day2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const day2Events = [
    { time: '09:00', event: 'Breakfast & Registration', venue: 'Main Hall' },
    { time: '09:15', event: 'Plenary Talk - Prof. Shree K Nayar', venue: 'Auditorium' },
    { time: '10:30', event: 'Coffee Break', venue: 'Foyer' },
    { time: '11:00', event: 'Workshops (Session 2)', venue: 'Various Rooms' },
    { time: '13:00', event: 'Lunch', venue: 'Dining Hall' },
    { time: '14:00', event: 'Paper Presentations - Parallel Sessions', venue: 'Multiple Rooms' },
    { time: '15:30', event: 'Tea Break', venue: 'Foyer' },
    { time: '16:00', event: 'Paper Presentations - Continued', venue: 'Multiple Rooms' },
    { time: '18:00', event: 'Awards Ceremony', venue: 'Main Hall' },
    { time: '19:00', event: 'Evening Reception', venue: 'Garden/Terrace' }
  ];

  return (
    <div className="page-container">
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Day 2 - July 23, 2026 (Tuesday)</h1>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <table className="table table-striped table-hover">
                <tbody>
                  {day2Events.map((item, idx) => (
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

export default Day2;
