import React, { useEffect } from 'react';
import PageCarousel from '../components/PageCarousel';

function CallForTutorials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const proposalRequirements = [
    'Proposed title of the short course/tutorial',
    'Proposers\' names, affiliations, contact details, and brief biographies',
    'Tutorial description including the list of topics to be covered, a brief outline of each topic, and other relevant details such as a short survey of the relevant literature including 10 most important works closely related to the tutorial topic',
    'A description of how the proposed course/tutorial fits the scope of NCVPRIPG',
    'If the tutorial plans to include presenters who are not in the list of proposers, link to such presenters\' websites and Google Scholar profiles',
    'Any special requirement related to space or logistics'
  ];

  return (
    <div className="page-container">
      <PageCarousel />
      <section className="section-padding">
        <div className="container">
          <div className="row Callsection">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Call for Tutorials</h1>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <p style={{textAlign: 'justify'}}>
                We invite proposals for short courses/tutorials (duration: 3 hours) to be organized as part of the NCVPRIPG 2026 this July at LNMIIT Jaipur, India. The broad area of the submitted proposals should be among the topics of interest to NCVPRIPG, i.e., on recent trends and tools used in the computer vision, pattern recognition, image processing, and graphics communities. A well-designed tutorial should be broad enough to provide a solid introduction to the chosen area of interest, but it should also be deep enough on the most important topics. We expect these tutorials to attract a large and diverse audience consisting of undergraduate and graduate students as well as seasoned researchers and practitioners from both academia and industry.
              </p>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <h5 style={{color: '#70b60a', marginBottom: '15px'}}>
                <strong>Proposal Requirements</strong>
              </h5>
              <ul style={{marginLeft: '20px'}}>
                {proposalRequirements.map((item, idx) => (
                  <li key={idx} style={{marginBottom: '10px', color: '#000'}}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <div className="alert alert-info" role="alert">
                <strong>Submission:</strong> All proposals must be submitted using the <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5JvAfrXdWVxTI5WcweyD-NCGyKmJxLaXDoXLd8upDMTlGTw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Google Form</a>. Any other mode of submission (e.g., via emails to organizers) would not be considered.
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <h5 style={{color: '#70b60a', marginBottom: '15px'}}>
                <strong>Important Dates</strong>
              </h5>
              <ul style={{marginLeft: '20px'}}>
                <li style={{marginBottom: '10px', color: '#000'}}>Deadline for submitting proposals: <strong>To be decided</strong></li>
                <li style={{marginBottom: '10px', color: '#000'}}>Notification of accepted proposals: <strong>To be decided</strong></li>
              </ul>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <p style={{marginBottom: '20px'}}>
                For any queries, please contact the Tutorial Chairs at: <a href="mailto:lalupendrapratap.singh@lnmiit.ac.in">lalupendrapratap.singh@lnmiit.ac.in</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CallForTutorials;
