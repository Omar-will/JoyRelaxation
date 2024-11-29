import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Sections/Header';
import Footer from './Sections/Footer';
import Home from './Pages/Home.jsx';
import NotrePersonnel from './Pages/NotrePersonnel';
import LesLocaux from './Pages/LesLocaux.jsx';
import Acces from './Pages/Acces.jsx';
import FAQ from './Pages/FAQ';
import Contact from './Pages/Contact.jsx';
import MentionsLegales from './Sections/MentionsLegales.jsx';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notre-personnel-medical" element={<NotrePersonnel />} />
          <Route path="/les-locaux" element={<LesLocaux />} />
          <Route path="/Acces" element={<Acces />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
