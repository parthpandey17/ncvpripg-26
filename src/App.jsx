import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Speakers from './pages/Speakers';
import Committee from './pages/Committee';
import Challenges from './pages/Challenges';
import Tutorials from './pages/Tutorials';
import Workshops from './pages/Workshops';
import SRS from './pages/SRS';
import Program from './pages/Program';
import InvitedTalks from './pages/InvitedTalks';
import Industry from './pages/Industry';
import CallForChallenges from './pages/CallForChallenges';
import CallForTutorials from './pages/CallForTutorials';
import CallForWorkshops from './pages/CallForWorkshops';
import CallForSponsorship from './pages/CallForSponsorship';
import CallForAbstract from './pages/CallForAbstract';
import Registration from './pages/Registration';
import TravelInfo from './pages/TravelInfo';
import Accommodation from './pages/Accommodation';
import PlacesToVisit from './pages/PlacesToVisit';
import Sponsors from './pages/Sponsors';
import Highlights from './pages/Highlights';
import Day1 from './pages/Day1';
import Day2 from './pages/Day2';
import Day3 from './pages/Day3';
import AuthorGuidelines from './pages/AuthorGuidelines';
import AcceptedAbstracts from './pages/AcceptedAbstracts';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/srs" element={<SRS />} />
        <Route path="/program" element={<Program />} />
        <Route path="/invited-talks" element={<InvitedTalks />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/call-for-challenges" element={<CallForChallenges />} />
        <Route path="/call-for-tutorials" element={<CallForTutorials />} />
        <Route path="/call-for-workshops" element={<CallForWorkshops />} />
        <Route path="/call-for-sponsorship" element={<CallForSponsorship />} />
        <Route path="/call-for-abstract" element={<CallForAbstract />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/travel-info" element={<TravelInfo />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/places-to-visit" element={<PlacesToVisit />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
        <Route path="/day3" element={<Day3 />} />
        <Route path="/author-guidelines" element={<AuthorGuidelines />} />
        <Route path="/accepted-abstracts" element={<AcceptedAbstracts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
