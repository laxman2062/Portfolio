import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import './App.css';


const pages = { Home, About, Projects, Experience, Contact };

function App() {
  const [activePage, setActivePage] = useState('Home');

  const handleSetPage = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActivePage(page);
  };

  const PageComponent = pages[activePage];

  return (
    <ThemeProvider>
      <div className="app">
        <div className="grid-bg" />
        <Navbar activePage={activePage} setActivePage={handleSetPage} />
        <main className="app-main">
          <PageComponent setActivePage={handleSetPage} />
        </main>
        <Footer setActivePage={handleSetPage} />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
