import React from 'react';
import { CheckCircle, Clock, RefreshCw, Flag, BarChart as ChartBar, List } from 'lucide-react';

const Features = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Key Features</h2>
        <div style={gridStyle}>
          <FeatureCard
            icon={<CheckCircle style={iconStyleGreen} />}
            title="Smart Goal Planning"
            description="Break down your goals into manageable tasks with intelligent time allocation and priority settings."
          />
          <FeatureCard
            icon={<Clock style={iconStyleBlue} />}
            title="Smart Break Scheduling"
            description="Automatically calculated break times to maintain productivity and prevent burnout."
          />
          <FeatureCard
            icon={<RefreshCw style={iconStylePurple} />}
            title="Flexible Rescheduling"
            description="Easily adjust and reschedule tasks with real-time updates to your study plan."
          />
          <FeatureCard
            icon={<Flag style={iconStyleRed} />}
            title="Priority Management"
            description="Set and adjust task priorities to focus on what matters most."
          />
          <FeatureCard
            icon={<ChartBar style={iconStyleYellow} />}
            title="Progress Tracking"
            description="Monitor your progress with visual indicators and completion statistics."
          />
          <FeatureCard
            icon={<List style={iconStyleTeal} />}
            title="Multiple Goals"
            description="Manage multiple goals simultaneously with organized task categorization."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div style={cardStyle}>
      <div style={iconContainerStyle}>{icon}</div>
      <h3 style={cardTitleStyle}>{title}</h3>
      <p style={cardDescriptionStyle}>{description}</p>
    </div>
  );
};

// Styles
const sectionStyle = {
  padding: '80px 0',
  backgroundColor: '#f5f5f5',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
};

const titleStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#171717',
  marginBottom: '64px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '32px',
};

const cardStyle = {
  backgroundColor: 'white',
  padding: '32px',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const iconContainerStyle = {
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  backgroundColor: '#f0fdf4', // Light green background for consistency
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '24px',
};

const cardTitleStyle = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#171717',
  marginBottom: '16px',
};

const cardDescriptionStyle = {
  color: '#525252',
};

// Icon Styles
const iconStyleGreen = {
  width: '32px',
  height: '32px',
  color: '#16a34a',
};

const iconStyleBlue = {
  width: '32px',
  height: '32px',
  color: '#2563eb',
};

const iconStylePurple = {
  width: '32px',
  height: '32px',
  color: '#9333ea',
};

const iconStyleRed = {
  width: '32px',
  height: '32px',
  color: '#dc2626',
};

const iconStyleYellow = {
  width: '32px',
  height: '32px',
  color: '#ca8a04',
};

const iconStyleTeal = {
  width: '32px',
  height: '32px',
  color: '#0d9488',
};

export default Features;