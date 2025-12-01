import React, { useEffect } from 'react';

function CallForSponsorship() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sponsorshipTiers = [
    { tier: 'Bronze', amount: '< 50,000', delegates: '-', website: '✓', booth: 'On availability', talk: '-' },
    { tier: 'Silver', amount: '50,000 - 75,000', delegates: '1', website: '✓', booth: '✓', talk: '10 min' },
    { tier: 'Gold', amount: '75,000 - 1,00,000', delegates: '2', website: '✓', booth: '✓', talk: '15 min' },
    { tier: 'Diamond', amount: '1,00,000 - 1,50,000', delegates: '3', website: '✓', booth: '✓', talk: '20 min' },
    { tier: 'Platinum', amount: '1,50,000 - 2,00,000', delegates: '4', website: '✓', booth: '✓', talk: '25 min' },
    { tier: 'Premier', amount: '> 2,00,000', delegates: '5', website: '✓', booth: 'Preferred Location', talk: '35 min' }
  ];

  return (
    <div className="page-container">
      <section className="section-padding">
        <div className="container">
          <div className="row Callsection">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Call for Sponsorship</h1>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <p style={{textAlign: 'justify', marginBottom: '20px'}}>
                LNMIIT Jaipur in collaboration with the Indian Unit for Pattern Recognition and Artificial Intelligence (IUPRAI) is organizing the ninth National Conference on Computer Vision, Pattern Recognition, Image Processing and Graphics (NCVPRIPG 2026). The NCVPRIPG is India's premier national conference focused on Computer Vision, Pattern Recognition, Image Processing and Graphics. Starting in 2007, it was a biennial national conference till 2019, providing a platform for the presentation of technological advances and research findings in these areas.
              </p>
              <p style={{textAlign: 'justify', marginBottom: '20px'}}>
                The main objective of the NCVPRIPG conference is to promote the students and research community of computer vision, pattern recognition, image processing and graphics in India and abroad. It also enables connecting academic researchers and students with the industry experts for coming up with industry-academia collaborations for developing efficient solutions for solving practical problems and challenging research problems in the domain of the conference.
              </p>
              <p style={{textAlign: 'justify', marginBottom: '20px'}}>
                NCVPRIPG has been a platform for researchers and students from academia and industry professionals to participate and present their works in computer vision, image processing, pattern recognition and graphics. In this edition of NCVPRIPG, we plan to have Plenary Talks, Industry and Startup sessions, Tutorials, and Workshop-cum-challenges. The aim is to inculcate and nurture research ideas among the research community through Plenary Talks, Industry and Startup sessions. Workshops and Tutorials will address real-world challenges in Vision and Graphics related areas. Each track will have experts from both academia and industry to know the current research challenges in the Vision and Graphics research domain.
              </p>
              <p style={{textAlign: 'justify', marginBottom: '30px'}}>
                NCVPRIPG conference generally hosts about 250-300 registered participants as per the statistics of the previous editions. We are glad to host personnel from the industries sponsoring NCVPRIPG per the table below.
              </p>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-12 col-md-12">
              <div style={{overflowX: 'auto'}}>
                <table className="table table-striped table-bordered">
                  <thead style={{backgroundColor: '#70b60a', color: 'white'}}>
                    <tr>
                      <th style={{textAlign: 'center'}}>Offerings/Acknowledgements</th>
                      <th style={{textAlign: 'center'}}>Bronze</th>
                      <th style={{textAlign: 'center'}}>Silver</th>
                      <th style={{textAlign: 'center'}}>Gold</th>
                      <th style={{textAlign: 'center'}}>Diamond</th>
                      <th style={{textAlign: 'center'}}>Platinum</th>
                      <th style={{textAlign: 'center'}}>Premier</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{textAlign: 'center'}}><strong>INR (excluding GST)</strong></td>
                      {sponsorshipTiers.map((tier, idx) => (
                        <td key={idx} style={{textAlign: 'center'}}>{tier.amount}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{textAlign: 'center'}}><strong>Number of Invitee Delegates/Free Registrations</strong></td>
                      {sponsorshipTiers.map((tier, idx) => (
                        <td key={idx} style={{textAlign: 'center'}}>{tier.delegates}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{textAlign: 'center'}}><strong>Visibility through NCVPRIPG website</strong></td>
                      {sponsorshipTiers.map((tier, idx) => (
                        <td key={idx} style={{textAlign: 'center'}}>{tier.website}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{textAlign: 'center'}}><strong>Exhibit booth</strong></td>
                      {sponsorshipTiers.map((tier, idx) => (
                        <td key={idx} style={{textAlign: 'center'}}>{tier.booth}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{textAlign: 'center'}}><strong>Sponsored Session Talk</strong></td>
                      {sponsorshipTiers.map((tier, idx) => (
                        <td key={idx} style={{textAlign: 'center'}}>{tier.talk}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <p style={{textAlign: 'justify', marginBottom: '20px'}}>
                The table above describes the Sponsorship Opportunities, for example, free registration and access to all conference sessions. Also note that the ability to be seen on the NCVPRIPG website and to reserve a demo table gives you the chance to contact others working in the fields of computer vision, pattern recognition, image processing, and graphics. The Industry session and Sponsored Session talks give opportunities to showcase products and services to a diverse audience and forge partnerships for potential project collaborations.
              </p>
              <p style={{textAlign: 'justify'}}>
                For more information or sponsorship opportunities, please email us at <a href="mailto:ncvpripg2026@lnmiit.ac.in">ncvpripg2026@lnmiit.ac.in</a>. Please send us an email with your contact information to allow us to reach your organizations quickly. Your idea will be reviewed and discussed with the organizing committee within five working days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CallForSponsorship;
