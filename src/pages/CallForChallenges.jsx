import React, { useEffect } from 'react';
import PageCarousel from '../components/PageCarousel';

function CallForChallenges() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challengeInfo = [
    {
      title: 'Proposal Requirements',
      items: [
        'A suitable and attractive challenge title',
        'A brief introduction of the challenge (max 500 words)',
        'The impact and significance of the challenge in the research and/or industrial community',
        'Major rules for participation and criteria that will be used to evaluate the submitted entries',
        'The team that will run the challenge (name, affiliation, email for each member)',
        'Important dates (e.g., submission deadline, data available, and winner announcement)',
        'Awards proposed, if any',
        'Any hands-on/live competition to be held during the event'
      ]
    },
    {
      title: 'Guidelines & Rules',
      items: [
        'Organizers cannot participate as competitors in the challenge they are organizing.',
        'Organizers should provide a dataset to participating teams that should include a training set with ground truth and a testing set whose ground truth is hidden.',
        'Challenge session organizers are in charge of evaluating the results/models submitted by the participants on the testing set, and setting up a leaderboard etc.',
        'Challenge session organizers can organize the presentation of best-performing teams in a dedicated session at NCVPRIPG-26. The session could include: (a) the presentation of the challenge, (b) the presentation of awards and the sponsors (if any), (c) an oral presentation of the model/approach by best teams (d) a poster session, (e) keynote/invite talk'
      ]
    }
  ];

  const importantDates = [
    { event: 'Challenges Proposal Submission Deadline', date: 'To be decided' },
    { event: 'Notification of Selection', date: 'To be decided' },
    { event: 'Web Posting of Challenges', date: 'To be decided' },
    { event: 'Opening Date for Submission to Challenges', date: 'To be decided' },
    { event: 'Closing Date for Submission to Challenges', date: 'To be decided' },
    { event: 'Announcement of Challenge Winners', date: 'To be decided' },
    { event: 'Registration Deadline for Challenge Attendees', date: 'To be decided' }
  ];

  return (
    <div className="page-container">
      <PageCarousel />
      <section className="section-padding">
        <div className="container">
          <div className="row Callsection">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Call for Challenges</h1>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <div className="alert alert-warning" role="alert">
                <strong>Note:</strong> Challenges should address a well-defined open problem relevant to NCVPRIPG-2026, provide high-quality data for testing/training algorithms, and define a clear assessment procedure. We invite proposals for 3-hour challenge sessions addressing problems that will engage and excite the research community.
              </div>
            </div>
          </div>

          {challengeInfo.map((section, idx) => (
            <div className="row justify-content-center mb-5" key={idx}>
              <div className="col-lg-10 col-md-12">
                <h5 style={{color: '#70b60a', marginBottom: '20px'}}>
                  <strong>{section.title}</strong>
                </h5>
                <ul style={{marginLeft: '20px'}}>
                  {section.items.map((item, i) => (
                    <li key={i} style={{marginBottom: '10px', color: '#000'}}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <p style={{marginBottom: '20px'}}>
                We encourage the organizers to use open-source data licenses and/or keep the challenge open to submissions beyond the conference, providing a sustained platform for benchmarking.
              </p>
              <p style={{marginBottom: '20px'}}>
                <strong>Note:</strong> It is possible to propose a combined workshop + challenge (within the 3-hour limit for the event). Please note the workshop guidelines available separately and mention in your proposal if you wish to configure your event this way.
              </p>
              <p style={{marginBottom: '30px'}}>
                Proposals should be submitted as a pdf via email to <a href="mailto:aloke.datta@lnmiit.ac.in">aloke.datta@lnmiit.ac.in</a>
              </p>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <h5 style={{color: '#70b60a', marginBottom: '20px'}}>
                <strong>Challenges Organization Timeline</strong>
              </h5>
              <table className="table table-striped">
                <tbody>
                  {importantDates.map((item, idx) => (
                    <tr key={idx}>
                      <td><strong>{item.event}</strong></td>
                      <td style={{color: '#70b60a'}}><strong>{item.date}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CallForChallenges;
