import React from 'react';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
