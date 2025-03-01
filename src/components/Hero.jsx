import React from 'react';

const Hero = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={headingStyle}>
            Transform Your Goals into Actionable Plans
          </h1>
          <p style={descriptionStyle}>
            Break down your goals into manageable tasks, get smart time management suggestions, and stay on track with our intelligent scheduling system.
          </p>
          <div style={buttonContainerStyle}>
            <button style={primaryButtonStyle} onClick={() => document.getElementById('goalInput')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Planning
            </button>
            <button style={secondaryButtonStyle} onClick={() => document.getElementById('howItWorks')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </button>
          </div>
        </div>

        <div style={taskCardContainerStyle}>
          <div style={taskCardStyle}>
            <div style={windowDotsStyle}>
              <span style={{ ...dotStyle, backgroundColor: '#ef4444' }}></span>
              <span style={{ ...dotStyle, backgroundColor: '#facc15' }}></span>
              <span style={{ ...dotStyle, backgroundColor: '#22c55e' }}></span>
            </div>
            <div style={taskListStyle}>
              <div style={taskItemStyle}>
                <span style={taskTitleStyle}>📚 Study for Finals</span>
                <span style={{ ...priorityStyle, color: '#22c55e' }}>High Priority</span>
              </div>
              <div style={taskDurationStyle}>Duration: 3 hours</div>

              <div style={taskItemStyle}>
                <span style={taskTitleStyle}>💪 Workout Session</span>
                <span style={{ ...priorityStyle, color: '#facc15' }}>Medium Priority</span>
              </div>
              <div style={taskDurationStyle}>Duration: 1 hour</div>

              <div style={taskItemStyle}>
                <span style={taskTitleStyle}>🎯 Project Planning</span>
                <span style={{ ...priorityStyle, color: '#3b82f6' }}>Low Priority</span>
              </div>
              <div style={taskDurationStyle}>Duration: 2 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Inline Styles
const sectionStyle = {
  backgroundColor: '#171717',
  padding: '80px 0',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '48px',
};

const contentStyle = {
  flex: '1',
  maxWidth: '50%',
};

const headingStyle = {
  fontSize: '48px',
  fontWeight: 'bold',
  color: 'white',
  marginBottom: '24px',
  lineHeight: '1.2',
};

const descriptionStyle = {
  fontSize: '20px',
  color: '#d3d3d3',
  marginBottom: '32px',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '16px',
};

const primaryButtonStyle = {
  backgroundColor: '#22c55e',
  color: 'white',
  padding: '12px 32px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '18px',
  fontWeight: '600',
  cursor: 'pointer',
};

const secondaryButtonStyle = {
  backgroundColor: 'transparent',
  color: '#22c55e',
  padding: '12px 32px',
  border: '2px solid #22c55e',
  borderRadius: '8px',
  fontSize: '18px',
  fontWeight: '600',
  cursor: 'pointer',
};

const taskCardContainerStyle = {
  flex: '1',
  maxWidth: '50%',
};

const taskCardStyle = {
  backgroundColor: '#262626',
  padding: '24px',
  borderRadius: '16px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
};

const windowDotsStyle = {
  display: 'flex',
  gap: '8px',
  marginBottom: '24px',
};

const dotStyle = {
  width: '12px',
  height: '12px',
  borderRadius: '50%',
};

const taskListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const taskItemStyle = {
  backgroundColor: '#404040',
  padding: '16px',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const taskTitleStyle = {
  color: 'white',
  fontSize: '16px',
};

const priorityStyle = {
  fontSize: '14px',
  fontWeight: '500',
};

const taskDurationStyle = {
  color: '#a3a3a3',
  fontSize: '14px',
  marginLeft: '16px',
  marginTop: '8px',
};

export default Hero;