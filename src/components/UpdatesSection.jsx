import React from 'react';

function UpdatesSection() {
  return (
    <section className="countdown-timer section-padding">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="heading-count">
              <h2 className="wow fadeInDown" data-wow-delay="0.2s">Updates</h2>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="row time-countdown justify-content-center wow fadeInUp" data-wow-delay="0.2s">
              <ul style={{ textAlign: 'justify' }}>
                {/* <li>Download the <a href="/files/Proceedings_NCVPRIPG_2026.pdf" download="NCVPRIPG_Proceedings.pdf">NCVPRIPG 2026 Proceedings</a>.</li>
                <li>Watch all the highlights of NCVPRIPG-2026 <a href="/highlights" target="_blank" rel="noopener noreferrer">here</a>.</li>
                <li>You can download the <a href="/files/Program_ScheduleNCVPRIPG_AllDays.pdf" download="NCVPRIPG_Schedule.pdf">program schedule</a> and <a href="/files/Inauguration_Schedule_NCVPRIPG_Final.pdf" download="NCVPRIPG_Inauguration.pdf">inauguration schedule</a> now.</li>
                <li>Jul 14 2026: The Online Registration has been closed. For the onsite registration rates and link, please drop an email to ncvpripg2026@lnmiit.ac.in<span className="flash-red"><strong> (NEW)</strong></span></li>
                <li>Jul 6 2026: Poster Design<a href="/srs#poster-guidelines" target="_blank" rel="noopener noreferrer"> Guidelines</a> (<a href="/files/Poster design guidelines_NCVPRIPG-2.pdf" download="NCVPRIPG_Poster_design_guidelines.pdf">PDF</a>) and standard template for presentation (<a href="/files/Presentation_NCVPRIPG_1.pptx" download="NCVPRIPG_Presentation_Slides.pptx">PPT</a>) under Student Research Symposium are now available. <span className="flash-red"><strong>(NEW)</strong></span></li>
                <li>Jul 5 2026: We are proud to announce that <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">MathWorks</a> is sponsoring the WINNER and RUNNER UP awards for the best projects in MATLAB/Simulink. For more details, visit the <a href="/srs#student-research-symposium-results">Student Research Symposium</a> page.</li>
                <li>Due to multiple student requests, we have extended the Early Bird deadline to <strong>July 7, 2026</strong>.</li>
                <li><a href="https://serb.gov.in/" target="_blank" rel="noopener noreferrer">SERB, Govt. of India</a> is our Premier Sponsor! Thanks, SERB.</li>
                <li><a href="https://drdo.gov.in/drdo/" target="_blank" rel="noopener noreferrer">DRDO</a>, <a href="http://innovativeinc.in/" target="_blank" rel="noopener noreferrer">Innovative Instruments</a>, <a href="https://ihub-drishti.ai/" target="_blank" rel="noopener noreferrer">TIH iHub</a>, <a href="https://techsolengineers.com/" target="_blank" rel="noopener noreferrer">Techsol</a> and <a href="https://ihub-data.ai/" target="_blank" rel="noopener noreferrer">iHub-Data</a> are our Diamond Sponsors! Thanks DRDO, Innovative Instruments, TIH iHub, Techsol and iHub-Data. <span className="flash-red"><strong>(NEW)</strong></span></li>
                <li><a href="http://www.nugenix.co.in/" target="_blank" rel="noopener noreferrer">Nugenix</a> and <a href="https://www.vehant.com/" target="_blank" rel="noopener noreferrer">Vehant</a> are our Silver Sponsors! Thanks Nugenix and Vehant.</li>
                <li><a href="http://www.alliedscientific.net/" target="_blank" rel="noopener noreferrer">ASP</a>, <a href="https://www.grss-ieee.org/" target="_blank" rel="noopener noreferrer">GRSS-IEEE</a> and <a href="http://www.federalbank.co.in/" target="_blank" rel="noopener noreferrer">Federal Bank</a> are our Bronze Sponsors! Thanks ASP, GRSS-IEEE, Federal Bank.</li>
                <li>Jun 25 2026: The selected <a href="/srs">abstracts</a> for NCVPRIPG'26 have been announced. Congratulations to the presenters! <span className="flash-red"><strong>(NEW)</strong></span></li>
                <li>May 22 2026: The <a href="/program">Program Schedule</a> is up now. <span className="flash-red"><strong>(NEW)</strong></span></li>
                <li>May 15 2026: The <a href="/registration">Online Registration</a> for NCVPRIPG'26 is now open. Early bird discounts are available until July 7, 2026.</li>
                <li>Apr 23 2026: A set of exciting <a href="/tutorials">Tutorials</a>, <a href="/workshops">Workshops</a>, and <a href="/challenges">Challenges</a> have been accepted by the committee.</li>
                <li>Mar 9 2026: <a href="/call-for-challenges#call-for-challenges">Call for Challenges</a> is up.</li>
                <li>Mar 8 2026: <a href="/call-for-tutorials#call-for-tutorials">Call for Tutorials</a>, <a href="/call-for-workshops#call-for-workshops">Call for Workshops</a>, <a href="/call-for-sponsorship#call-for-sponsorship">Call for Sponsorship</a> and <a href="/call-for-abstract#call-for-abstract">Call for Abstracts</a> are up.</li>
                <li>Mar 7 2026: Website is up</li> */}
                <li>No updates till now....</li>

              </ul>
            </div>
          </div>
          <table className="registration-table">
            <thead>
              <tr>
                <th>Type of Registration</th>
                <th colSpan="2">Early Bird (Ends: July 07, 2026)</th>
                <th colSpan="2">Standard (Ends: July 13, 2026)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td><strong>IUPRAI Member</strong></td>
                <td><strong>Non-IUPRAI Member</strong></td>
                <td><strong>IUPRAI Member</strong></td>
                <td><strong>Non-IUPRAI Member</strong></td>
              </tr>
              <tr>
                <td>Student Registration (Students enrolled in Indian Universities)</td>
                <td>tbd</td>
                <td>tbd</td>
                <td>tbd</td>
                <td>tbd</td>
              </tr>
              <tr>
                <td>Academic and R&D Registration (Participants affiliated with Indian Academic/ Govt funded R&D Institutions)</td>
                <td>tbd</td>
                <td>tbd</td>
                <td>tbd</td>
                <td>tbd</td>
              </tr>
              <tr>
                <td>Industry Registration (Participants affiliated with Indian Industries)</td>
                <td>tbd</td>
                <td>tbd</td>
                <td>tbd</td>
                <td>tbd</td>
              </tr>
            </tbody>
          </table>
          <div className="registration-note2">
            Registration fee is non refundable
          </div>
          <div className="registration-note">
            <b>Note:</b> All rates are inclusive of GST. (The registration fee includes a conference kit, access to workshops and tutorials, meals (including breakfast and dinner))
          </div>
        </div>
        <div style={{ marginTop: '20px', textAlign: 'justify' }}>
          <p>Shared accommodation (non-AC) at LNMIIT hostels shall be provided (subject to availability on payment basis).</p>
          <p>An invoice for the registration fee payment will be generated for every registration.</p>
          <p>Certificates will be provided to all registered participants.</p>
        </div>
      </div>
    </section>
  );
}

export default UpdatesSection;
