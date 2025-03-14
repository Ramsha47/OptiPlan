import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import Features from './components/Features.jsx';
import GoalInput from './components/GoalInput.jsx';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Hero />
      <Features />
      <GoalInput />
      <Footer />
    </div>
  );
}

export default App;