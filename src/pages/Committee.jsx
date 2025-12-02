import React, { useEffect } from 'react';

function Committee() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const committeeSections = [
    {
      title: 'Chief Patrons',
      members: [
        { name: 'Prof. N. P. Padhy', position: 'MNIT Jaipur', image: '/assets/img/Prof. N. P. Padhy, MNIT Jaipur.jpg'  },
        { name: 'Prof. Rahul Banerjee', position: 'LNMIIT Jaipur', image: '/assets/img/Prof. Rahul Banerjee, LNMIIT Jaipur.png' }
      ]
    },
    {
      title: 'General Chairs',
      members: [
        { name: 'Prof. Santanu Choudhury', position: 'IIT Delhi', image: '/assets/img/Prof. Santanu Choudhury, IIT Delhi.jpg' },
        { name: 'Prof. Dipti Prasad Mukherjee', position: 'ISI Kolkata', image: '/assets/img/Prof. Dipti Prasad Mukherjee, ISI Kolkata.jpg' },
        { name: 'Prof. Anoop Namboodiri', position: 'IIIT Hyderabad', image: '/assets/img/Prof. Anoop Namboodiri, IIIT Hyderabad.jpg' }
      ]
    },
    {
      title: 'Program Chairs',
      members: [
        { name: 'Dr. Prithwijit Guha', position: 'IIT Guwahati', image: '/assets/img/Dr. Aditya Nigam, IIT Mandi.jpg' },
        { name: 'Dr. Aditya Nigam', position: 'IIT Mandi', image: '/assets/img/Dr. Aditya Nigam, IIT Mandi.jpg' },
        { name: 'Dr. Praveen Kumar', position: 'NIT Nagpur', image: '/assets/img/Dr. Praveen Kumar, NIT Nagpur.jpg' },
        { name: 'Dr. Neeta Nain', position: 'MNIT Jaipur', image: '/assets/img/Dr. Neeta Nain, MNIT Jaipur.webp' },
        { name: 'Dr. Preety Singh', position: 'LNMIIT Jaipur', image: '/assets/img/Dr. Preety Singh, LNMIIT Jaipur.jpg' }
      ]
    },
    {
      title: 'Tutorial Chairs',
      members: [
        { name: 'Dr. Zahid Akhtar', position: 'State University of New York Polytechnic Institute', image: '/assets/img/Dr. Zahid Akhtar, State University of New York Polytechnic Institute.webp' },
        { name: 'Dr. Badri Narayan Subudhi', position: 'IIT Jammu', image: '/assets/img/Dr. Badri Narayan Subudhi, IIT Jammu.jpg' },
        { name: 'Dr. Satish Singh', position: 'IIIT Allahabad', image: '/assets/img/Dr. Satish Singh, IIIT Allahabad.png' },
        { name: 'Dr. Deepak Ranjan Nayak', position: 'MNIT Jaipur', image: '/assets/img/Dr. Deepak Ranjan Nayak, MNIT Jaipur.webp' },
        { name: 'Dr. Upendra Pratap Singh', position: 'LNMIIT Jaipur', image: '/assets/img/Dr. Upendra Pratap Singh, LNMIIT Jaipur.jpg' }
      ]
    },
    {
      title: 'Workshop Chairs',
      members: [
        { name: 'Prof. Aparajita Ojha', position: 'IIITDM Jabalpur', image: '/assets/img/Prof. Aparajita Ojha, IIITDM, Jabalpur.jpg' },
        { name: 'Dr. Indra Deep Mastan', position: 'IIT BHU', image: '/assets/img/Dr. Indra Deep Mastan, IIT BHU.jpg' },
        { name: 'Dr. Satyendra Singh Chouhan', position: 'MNIT Jaipur', image: '/assets/img/Dr. Satyendra Singh Chouhan, MNIT Jaipur.png' },
        { name: 'Dr. Ankit Jha', position: 'LNMIIT Jaipur', image: '/assets/img/Dr. Ankit Jha, LNMIIT Jaipur.jpg' },
        { name: 'Dr. Anukriti Bansal', position: 'LNMIIT Jaipur', image: '/assets/img/Dr. Anukriti Bansal, LNMIIT Jaipur.jpg' }
      ]
    },
    {
      title: 'Challenge Chairs',
      members: [
        { name: 'Dr. Sunny Manchanda', position: 'DRDO', image: '/assets/img/Dr. Sunny Manchanda, DRDO.jpg' },
        { name: 'Prof. Uma Satya Ranjan', position: 'IIT Jammu', image: '/assets/img/Prof. Uma Satya Ranjan, IIT Jammu.jpeg' },
        { name: 'Dr. Suman Kundu', position: 'IIT Jodhpur', image: '/assets/img/Dr. Suman Kundu, IIT Jodhpur.jpg' },
        { name: 'Dr. Mahipal Jadeja', position: 'MNIT Jaipur', image: '/assets/img/Dr. Mahipal Jadeja, MNIT Jaipur.png' },
        { name: 'Dr. Aloke Datta', position: 'LNMIIT Jaipur', image: '/assets/img/Dr. Aloke Datta, LNMIIT Jaipur.webp' }
      ]
    },
    {
      title: 'Sponsorship Chairs',
      members: [
        { name: 'Dr. Deepak Ranjan Nayak', position: 'MNIT Jaipur', image: '/assets/img/Dr. Deepak Ranjan Nayak, MNIT Jaipur.webp' },
        { name: 'Dr. Priyanka Gupta', position: 'LNMIIT Jaipur', image: '/assets/img/Dr. Priyanka Gupta, LNMIIT Jaipur.jpeg' }
      ]
    },
    {
      title: 'Publication Chairs',
      members: [
        { name: 'Dr. Nikunja Bihari Kar', position: 'LNMIIT Jaipur', image: '/assets/img/Dr. Nikunja Bihari Kar, LNMIIT Jaipur.jpg' },
        { name: 'Dr. Sonu Lamba', position: 'Gati Shakti Vishwavidyalaya', image: '/assets/img/Dr. Sonu Lamba, Gati Shakti Vishwavidyalaya.jpg' }
      ]
    },
    {
      title: 'Publicity Chairs',
      members: [
        { name: 'Dr. Mahipal Jadeja', position: 'MNIT Jaipur', image: '/assets/img/Dr. Mahipal Jadeja, MNIT Jaipur.png' },
        { name: 'Dr. Vikas Bajpai', position: 'LNMIIT Jaipur', image: '/assets/img/Dr. Vikas Bajpai, LNMIIT Jaipur.jpg' },
        { name: 'Dr. Rahul Sharma', position: 'LNMIIT Jaipur', image: '/assets/img/Dr. Rahul Sharma, LNMIIT Jaipur.png' }
      ]
    },
    {
      title: 'Finance & Registration Chairs',
      members: [
        { name: 'Dr. Sunil Kumar', position: 'LNMIIT Jaipur', image: '/assets/img/Dr. Sunil Kumar, LNMIIT Jaipur.png' },
        { name: 'Dr. Chirag Kumar', position: 'LNMIIT Jaipur', image: '/assets/img/Dr. Chirag Kumar, LNMIIT Jaipur.jpg' }
      ]
    },
    {
      title: 'Local Organizing Chairs',
      members: [
        { name: 'Dr. Rajbir Kaur', position: 'LNMIIT Jaipur', image: '/assets/img/Dr. Rajbir Kaur, LNMIIT Jaipur.jpg' },
        { name: 'Dr. Nitesh Pradhan', position: 'LNMIIT Jaipur', image: '/assets/img/Dr. Nitesh Pradhan, LNMIIT Jaipur.jpg' },
         {name: 'Dr. Kuldeep Singh', position: 'MNIT Jaipur', image: '/assets/img/Dr. Kuldeep Singh, MNIT Jaipur.png' }
      ]
    }

  ];

  return (
    <div className="page-container">
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Committee Members</h1>
              </div>

              {committeeSections.map((section, index) => (
                <div key={index} className="mb-5">
                  <h2 className="committee-title text-center mb-4">{section.title}</h2>
                  <div className="row justify-content-center">
                    {section.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="col-sm-12 col-lg-4 col-md-6 mb-4 text-center">
                        <img 
                          className="image rounded-circle mb-3" 
                          src={member.image} 
                          alt={member.name}
                          style={{width: '150px', height: '150px', objectFit: 'cover'}}
                          onError={(e) => {e.target.src = '/assets/img/placeholder.jpg'}}
                        />
                        <br />
                        <strong className="text">{member.name}</strong>
                        <p className="text small mt-2">{member.position}</p>
                      </div>
                    ))}
                  </div>
                  {index < committeeSections.length - 1 && <hr className="my-5" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Committee;
