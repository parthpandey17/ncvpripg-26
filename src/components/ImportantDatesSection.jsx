import React, { useEffect } from 'react';

function ImportantDatesSection() {
  useEffect(() => {
    const getDaysLeft = (targetDate) => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference < 0) {
        return "Date Due";
      } else {
        const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
        return daysLeft;
      }
    };

    // Only these 4 have real dates
    const countdownElements = [
      { id: 'submissionStarts', date: 'March 15, 2026' },
      { id: 'submissionEnds', date: 'April 15, 2026' },
      { id: 'reviewResults', date: 'June 15, 2026' },
      { id: 'registrationCameraReady', date: 'June 15, 2026' } // use starting date for countdown
    ];

    countdownElements.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        element.innerText = getDaysLeft(new Date(item.date));
      }
    });
  }, []);

  return (
    <section id="important-dates" className="important-dates section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="wow fadeInDown text-center" data-wow-delay="0.2s">Important Dates</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Days Left</th>
                </tr>
              </thead>

              <tbody>
                {/* Actual updated dates */}
                <tr>
                  <td>Submissions Start</td>
                  <td>March 15, 2026</td>
                  <td id="submissionStarts"></td>
                </tr>

                <tr>
                  <td>Submission Ends</td>
                  <td>April 15, 2026</td>
                  <td id="submissionEnds"></td>
                </tr>

                <tr>
                  <td>Review Results</td>
                  <td>June 15, 2026</td>
                  <td id="reviewResults"></td>
                </tr>

                <tr>
                  <td>Registration & Camera-Ready Submission</td>
                  <td>June 15, 2026 – July 05, 2026</td>
                  <td id="registrationCameraReady"></td>
                </tr>

                {/* Everything else "To be decided" */}
                <tr><td colSpan="3"><strong>Other Deadlines</strong></td></tr>

                <tr><td>Workshops</td><td colSpan="2">To be decided</td></tr>
                <tr><td>Tutorials</td><td colSpan="2">To be decided</td></tr>
                <tr><td>Challenges</td><td colSpan="2">To be decided</td></tr>
                <tr><td>Registration Deadline</td><td colSpan="2">To be decided</td></tr>
                <tr><td>Conference Schedule</td><td colSpan="2">To be decided</td></tr>
                <tr><td>Camera-ready Guidelines</td><td colSpan="2">To be decided</td></tr>
                <tr><td>Author Notification</td><td colSpan="2">To be decided</td></tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImportantDatesSection;
