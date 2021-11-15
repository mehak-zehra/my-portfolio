import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [menuOptions] = useState([
    {
      label: 'About',
    },
    {
      label: 'Projects',
    },
    {
      label: 'Contact',
    },
    {
      label: 'Resume',
    },
  ])

  const [selectedMenu, setSelectedMenu] = useState(menuOptions[0])

  return (
    <div>
      <Nav options={menuOptions} change={setSelectedMenu} />
      <div className="container">
        {selectedMenu.label === 'About' && (
          <About />
        )}
        {selectedMenu.label === 'Projects' && (
          <Projects />
        )}
        {selectedMenu.label === 'Contact' && (
          <Contact />
        )}
        {selectedMenu.label === 'Resume' && (
          <Resume />
        )}

      </div>
      <Footer />
    </div>
  );
}

export default App;
