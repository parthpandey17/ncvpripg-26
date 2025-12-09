import React, { useEffect } from 'react';
import PageCarousel from '../components/PageCarousel';

function Day3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const day3Events = [
    { time: '09:00', event: 'Breakfast & Registration', venue: 'Main Hall' },
    { time: '09:30', event: 'Industry Speakers - Latest Trends', venue: 'Auditorium' },
    { time: '10:30', event: 'Coffee Break', venue: 'Foyer' },
    { time: '11:00', event: 'Panel Discussion - Future of Computer Vision', venue: 'Main Hall' },
    { time: '12:30', event: 'Networking Session', venue: 'Garden Area' },
    { time: '13:30', event: 'Lunch', venue: 'Dining Hall' },
    { time: '15:00', event: 'Workshops - Special Sessions (Optional)', venue: 'Various Rooms' },
    { time: '16:30', event: 'Tea & Closing Remarks', venue: 'Main Hall' },
    { time: '17:00', event: 'Conference Closing Ceremony', venue: 'Auditorium' },
    { time: '18:00', event: 'Informal Dinner & Networking', venue: 'All Attendees' }
  ];

  return (
    <div className="page-container">
      <PageCarousel />
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Day 3 - July 24, 2026 (Wednesday)</h1>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <table className="table table-striped table-hover">
                <tbody>
                  {day3Events.map((item, idx) => (
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

export default Day3;
