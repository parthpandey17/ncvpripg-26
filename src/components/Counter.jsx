import React, { useEffect, useState } from 'react';
import '../styles/components/counter.scss';

const FINAL_COUNTS = {
  speakers: 0,
  submissions: 0,
  participants: 0,
  days: 3
};

function Counter() {
  const [counts, setCounts] = useState({
    speakers: 0,
    submissions: 0,
    participants: 0,
    days: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCounts((prev) => {
        const updated = { ...prev };
        Object.keys(updated).forEach((key) => {
          if (updated[key] < FINAL_COUNTS[key]) {
            updated[key] += Math.ceil(FINAL_COUNTS[key] / 50);
          } else {
            updated[key] = FINAL_COUNTS[key];
          }
        });
        return updated;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []); 

  return (
    <section className="counter-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
            <div className="counter">
              <h3 className="counter-value">{counts.speakers}+</h3>
              <p className="counter-label">Speakers</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
            <div className="counter">
              <h3 className="counter-value">{counts.submissions}+</h3>
              <p className="counter-label">Submissions</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
            <div className="counter">
              <h3 className="counter-value">{counts.participants}+</h3>
              <p className="counter-label">Participants</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
            <div className="counter">
              <h3 className="counter-value">{counts.days}</h3>
              <p className="counter-label">Days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
