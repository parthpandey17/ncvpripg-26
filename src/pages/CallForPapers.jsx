import React, { useEffect } from 'react';
import PageCarousel from '../components/PageCarousel';

function CallForPapers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 const topics = [
  'Deep Learning for Computer Vision',
  'Generative AI for Vision',
  'Pattern Recognition',
  'Indian Datasets for Computer Vision',
  'Segmentation',
  'Texture, Shape, Color',
  'Restoration, Enhancement',
  'Visual Tracking',
  'Motion and Video Analysis',
  'Explainable Vision Systems',
  'Compressive Sensing',
  '3D Reconstruction',
  'Object and Pattern Recognition',
  'Machine Learning for Vision and Graphics',
  'Medical Image Analysis',
  'Biometrics, Forensics',
  'Virtual/Augmented Reality',
  'Human-Computer Interaction',
  'Computational Imaging',
  'Vision for Robotics and Autonomous Vehicles',
  'Underwater Image Processing',
  'Sensors and Modelling',
  'Vision-Based Graphics',
  'Activity Recognition',
  'Shape from X',
  'Vision for Digital Heritage',
  'Shape Analysis',
  'Real-Time Graphics',
  'Animation and Rendering',
  'Scientific Visualization',
  'Document Image Analysis',
  'Remote Sensing',
  'Scene Understanding',
  'Vision and Language',
  'Statistical Methods & Optimization',
  'Vision and Graphics for Society'
];

  return (
    <div className="page-container">
      <PageCarousel />
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Call For Papers</h1>
                <div className="underline" style={{ width: '60px', height: '3px', background: '#70b60a', margin: '12px auto 0' }}></div>
              </div>

              <div className="row justify-content-center mb-4">
                <div className="col-lg-10 col-md-12">
                  <p style={{ textAlign: 'justify', lineHeight: 1.8 }}>
                    We invite papers to be organized as part of NCVPRIPG 2026 at LNMIIT, Jaipur, India. The broad area of the submitted papers should be among the topics of interest to the computer vision, pattern recognition, image processing, and graphics communities. A well-designed paper should be broad enough to provide a solid introduction to the chosen area of interest, but it should also be deep enough on the most important topics. We expect these papers to attract a large and diverse audience consisting of undergraduate and graduate students as well as seasoned researchers and practitioners from both academia and industry.
                  </p>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                  <ul style={{ lineHeight: 2, textAlign: 'justify' }}>
                    {topics.map((t, i) => (
                      <li key={i} style={{ color: '#000' }}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <hr className="my-5" />

              <div className="row justify-content-center mb-4">
                <div className="col-lg-10 col-md-12">
                  <h2 className="committee-title mb-3">Preparing Your Paper</h2>
                  <p style={{ textAlign: 'justify', lineHeight: 1.8 }}>
                    For your convenience, we have summarized in the “Author Guidelines” document how a proceedings paper should be structured, how elements (headings, figures, references) should be formatted using our predefined styles, etc. We also give some insight on how your paper will be typeset at NCVPRIPG. The PDF of the Authors Guidelines can be downloaded here:
                    {' '}<a href="/Author_Guidelines_NCVPRIPG2026.pdf" target="_blank" rel="noopener noreferrer">Proceedings Guidelines for Authors</a>.
                  </p>
                  <p>
                    Authors must use the manuscript template specified here. The LaTeX and Word templates can be downloaded from the following links:
                  </p>
                  <ul>
                    <li><a href="/templates/latex-template.zip" target="_blank" rel="noopener noreferrer">Latex Template</a></li>
                    <li><a href="/templates/word-template.docx" target="_blank" rel="noopener noreferrer">Word Template</a></li>
                  </ul>
                  <p>
                    Authors can use the Proceedings Templates available in the scientific authoring platform Overleaf (<a href="https://www.overleaf.com/" target="_blank" rel="noopener noreferrer">Template</a>).
                  </p>
                  {/* <div className="d-flex align-items-center" style={{ gap: '16px', margin: '20px 0' }}>
                    <img src="/assets/img/springer.png" alt="Springer" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                    <p style={{ marginBottom: 0 }}>
                      The proceedings of the conference will be published by Scopus Indexed – Springer in{' '}
                      <a href="https://www.springer.com/series/7899" target="_blank" rel="noopener noreferrer">Communications in Computer and Information Science series (CCIS)</a>.
                      CCIS is abstracted/indexed in DBLP, Google Scholar, EI-Compendex, Mathematical Reviews, SCImago, Scopus. CCIS volumes are also generally submitted for inclusion in ISI Proceedings.
                    </p>
                  </div> */}

                  {/* <h3 className="mt-4" style={{ fontWeight: 700 }}>All papers must be submitted using the <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer">CMT link</a></h3> */}

                  <div className="mt-4">
                    <h4 style={{ fontWeight: 700 }}>Important Dates:</h4>
                    <ul>
                      <li>Submissions Starts: March 10, 2026</li>
                      <li>Submission Ends: April 10, 2026</li>
                      <li>Notification of Acceptance: June 20, 2026</li>
                      <li>Registration & Camera Ready Submission: 20 June - 5 July, 2026</li>
                    </ul>
                    <p style={{ marginTop: '10px' }}>For any queries, please contact at: <a href="mailto:ncvpripg2026@lnmiit.ac.in">ncvpripg2026@lnmiit.ac.in</a></p>
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

export default CallForPapers;