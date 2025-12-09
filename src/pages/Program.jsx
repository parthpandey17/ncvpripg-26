import React, { useEffect } from 'react';
import PageCarousel from '../components/PageCarousel';

function Program() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schedule = [
    {
      day: 'Day 1: July 22, 2026 (Monday)',
      events: [
        { time: '08:00 - 09:00', title: 'Registration', venue: 'SAC Recreation Room' },
        { time: '09:30 - 10:45', title: 'Inaugural Speech & Exhibition Opening', venue: 'MPH, SAC' },
        { time: '10:45 - 11:00', title: 'High Tea Break', venue: 'Various Venues' },
        { time: '11:00 - 11:50', title: 'Plenary Talk - Prof. Sanghamitra Bandyopadhyay', venue: 'MPH, SAC' },
        { time: '12:00 - 13:30', title: 'Challenges & Panel Discussions', venue: 'Multiple Halls' },
        { time: '13:30 - 14:30', title: 'Lunch Break', venue: 'Cafeteria' },
        { time: '14:30 - 17:30', title: 'Tutorials', venue: 'Multiple Halls' },
        { time: '17:30 - 18:45', title: 'Student Research Symposium', venue: 'Multiple Halls' },
        { time: '19:00 - 19:50', title: 'Cultural Events', venue: 'MPH, SAC' },
        { time: '19:50 - 20:50', title: 'Gala Dinner', venue: 'Dining Hall' }
      ]
    },
    {
      day: 'Day 2: July 23, 2026 (Tuesday)',
      events: [
        { time: '09:15 - 10:00', title: 'Plenary Talk - Prof. Shree K Nayar', venue: 'MPH, SAC' },
        { time: '10:10 - 13:10', title: 'Workshops', venue: 'Multiple Halls' },
        { time: '13:15 - 14:15', title: 'Lunch Break', venue: 'Cafeteria' },
        { time: '14:15 - 17:15', title: 'Paper Presentations & Poster Sessions', venue: 'Multiple Halls' },
        { time: '17:30 - 18:30', title: 'Awards & Closing Ceremony', venue: 'MPH, SAC' }
      ]
    },
    {
      day: 'Day 3: July 24, 2026 (Wednesday)',
      events: [
        { time: '09:00 - 10:00', title: 'Industry Speaker Sessions', venue: 'Multiple Halls' },
        { time: '10:00 - 10:30', title: 'Tea Break', venue: 'Various Venues' },
        { time: '10:30 - 12:30', title: 'Panel Discussions & Q&A Sessions', venue: 'Multiple Halls' },
        { time: '12:30 - 13:30', title: 'Lunch Break', venue: 'Cafeteria' },
        { time: '14:00 onwards', title: 'Post-Conference Activities & Networking', venue: 'Campus' }
      ]
    }
  ];

  return (
    <div className="page-container">
      <PageCarousel />
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Conference Schedule</h1>
              </div>

              {/* <div className="row justify-content-center">
                <div className="col-lg-11 col-md-12">
                  {schedule.map((daySchedule, dayIndex) => (
                    <div key={dayIndex} className="mb-5">
                      <h4 className="mb-4 p-3" style={{backgroundColor: '#70b60a', color: 'white', borderRadius: '5px'}}>
                        {daySchedule.day}
                      </h4>
                      <div className="table-responsive">
                        <table className="table table-hover table-striped">
                          <tbody>
                            {daySchedule.events.map((event, eventIndex) => (
                              <tr key={eventIndex}>
                                <td style={{fontWeight: 'bold', width: '20%', color: '#70b60a'}}>
                                  {event.time}
                                </td>
                                <td>
                                  <strong>{event.title}</strong>
                                  <br />
                                  <small className="text-muted">Venue: {event.venue}</small>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {dayIndex < schedule.length - 1 && <hr className="my-4" />}
                    </div>
                  ))}

                  <div className="mt-5 pt-4 border-top">
                    <div className="alert alert-info">
                      <p className="mb-0">
                        <strong>Note:</strong> Schedule is subject to change. Detailed venue information and session descriptions will be provided during registration and in the conference mobile app.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <div className="alert alert-info text-center" role="alert" style={{
                    backgroundColor: '#f8f9fa',
                    border: '2px solid #70b60a',
                    borderRadius: '8px',
                    padding: '40px 20px',
                    fontSize: '20px',
                    color: '#333'
                  }}>
                    <i className="lni-construction" style={{fontSize: '48px', color: '#70b60a', display: 'block', marginBottom: '20px'}}></i>
                    <strong>Under Construction</strong>
                    <p style={{marginTop: '15px', fontSize: '16px', marginBottom: '0'}}>
                      The program schedule will be updated here soon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Program;
