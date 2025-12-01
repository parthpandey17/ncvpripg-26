import React, { useEffect } from 'react';

function CallForWorkshops() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workshopTopics = [
    'Applications of Transformers in vision, medical imaging or other related areas',
    'Applications of Generative modeling using diffusion models',
    'Applications of Deep Reinforcement techniques for various vision and image-related works.'
  ];

  const proposalRequirements = [
    'Title of the workshop',
    'Workshop Organizers (names, affiliation, and contact information)',
    'Scope and topics of the workshop (max 1 page)',
    'Planned format of the workshop, including a tentative schedule',
    'If a plenary (high profile) speaker is being included, the workshop duration can be extended to 4 hours. Please mention the name and affiliation of such a speaker in case of such a plan.'
  ];

  return (
    <div className="page-container">
      <section className="section-padding">
        <div className="container">
          <div className="row Callsection">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Call for Workshops</h1>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <p style={{textAlign: 'justify'}}>
                The NCVPRIPG 2026 workshops will highlight current topics related to technical and business issues in computer vision, pattern recognition, and image processing. We invite the submission of workshop proposals for 3-hour-long workshops. Workshops should highlight current topics related to computer vision, pattern recognition, and image processing, including, but not restricted to:
              </p>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <ul style={{marginLeft: '20px'}}>
                {workshopTopics.map((topic, idx) => (
                  <li key={idx} style={{marginBottom: '10px'}}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <div className="alert alert-info" role="alert">
                <strong>Note:</strong> It is possible to propose a combined workshop + challenge (within the 3 hour limit for the event). Please note the challenge guidelines available separately and mention in your proposal if you wish to configure your event this way.
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <h5 style={{color: '#70b60a', marginBottom: '15px'}}>
                <strong>Workshop Proposal Format (PDF)</strong>
              </h5>
              <p>Each Workshop Proposal must include (please follow the following order in your proposal):</p>
              <ul style={{marginLeft: '20px'}}>
                {proposalRequirements.map((item, idx) => (
                  <li key={idx} style={{marginBottom: '10px'}}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <h5 style={{color: '#70b60a', marginBottom: '15px'}}>
                <strong>Proposal Submission</strong>
              </h5>
              <p>Email the proposal PDF to:</p>
              <p style={{fontSize: '16px', fontWeight: 'bold', color: '#212121'}}>
                <a href="mailto:workshops.ncvpripg.2026@gmail.com">workshops.ncvpripg.2026@gmail.com</a>
              </p>
              <p style={{marginTop: '20px'}}>
                All workshop abstracts and presentations will be compiled and archived online. No proceedings with any publisher are planned at this time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CallForWorkshops;
