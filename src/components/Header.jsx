import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div style={containerStyle}>
          <div style={logoStyle}>GoalPlanner</div>
          
          <button style={mobileMenuButtonStyle} onClick={toggleMobileMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div style={desktopNavStyle}>
            <a href="#hero" style={navLinkStyle}>Home</a>
            <a href="#features" style={navLinkStyle}>Features</a>
            <a href="#goalInput" style={navLinkStyle}>Plan Goals</a>
            <a href="#howItWorks" style={navLinkStyle}>How It Works</a>
            <a href="#testimonials" style={navLinkStyle}>Testimonials</a>
            <a href="#faq" style={navLinkStyle}>FAQ</a>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div style={mobileMenuStyle}>
            <a href="#hero" style={mobileNavLinkStyle}>Home</a>
            <a href="#features" style={mobileNavLinkStyle}>Features</a>
            <a href="#goalInput" style={mobileNavLinkStyle}>Plan Goals</a>
            <a href="#howItWorks" style={mobileNavLinkStyle}>How It Works</a>
            <a href="#testimonials" style={mobileNavLinkStyle}>Testimonials</a>
            <a href="#faq" style={mobileNavLinkStyle}>FAQ</a>
          </div>
        )}
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#171717',
  position: 'relative',
};

const navStyle = {
  padding: '16px 24px',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  color: 'white',
  fontSize: '24px',
  fontWeight: 'bold',
};

const mobileMenuButtonStyle = {
  display: 'block',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: 'white',
};

const desktopNavStyle = {
  display: 'none',
};

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginLeft: '32px',
};

const mobileMenuStyle = {
  position: 'absolute',
  top: '64px',
  left: '0',
  right: '0',
  backgroundColor: '#262626',
  padding: '16px',
};

const mobileNavLinkStyle = {
  display: 'block',
  color: 'white',
  textDecoration: 'none',
  padding: '8px 0',
};

const heroContainerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '80px 24px',
  minHeight: '70vh',
  display: 'flex',
  alignItems: 'center',
};

const heroContentStyle = {
  maxWidth: '640px',
};

const heroTitleStyle = {
  fontSize: '48px',
  fontWeight: 'bold',
  color: 'white',
  marginBottom: '24px',
};

const heroTextStyle = {
  fontSize: '20px',
  color: '#d3d3d3',
  marginBottom: '32px',
};

const heroButtonStyle = {
  backgroundColor: '#22c55e',
  color: 'white',
  padding: '12px 32px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: '600',
};

export default Header;