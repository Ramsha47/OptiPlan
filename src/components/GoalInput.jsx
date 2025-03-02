import React, { useState } from 'react';

const GoalInput = () => {
  const [goals, setGoals] = useState([]);
  const [showPlan, setShowPlan] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      id: Date.now(),
      name: taskName,
      time: Number(taskTime),
      priority,
    };
    setGoals([...goals, newGoal]);
    setTaskName('');
    setTaskTime('');
    setPriority('');
    setShowPlan(true);
  };

  const removeGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
    if (goals.length === 1) setShowPlan(false);
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Plan Your Goals</h2>

        <div style={formContainerStyle}>
          <div style={cardStyle}>
            <div style={cardContentStyle}>
              <form onSubmit={handleSubmit} style={formStyle}>
                <div style={inputGroupStyle}>
                  <label style={labelStyle} htmlFor="taskName">
                    Task/Goal Name
                  </label>
                  <input
                    id="taskName"
                    name="taskName"
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    required
                    placeholder="Enter your task or goal"
                    style={inputStyle}
                  />
                </div>

                <div style={inputGroupStyle}>
                  <label style={labelStyle} htmlFor="taskTime">
                    Time Required (in hours)
                  </label>
                  <input
                    id="taskTime"
                    name="taskTime"
                    type="number"
                    value={taskTime}
                    onChange={(e) => setTaskTime(e.target.value)}
                    min="0.5"
                    step="0.5"
                    required
                    placeholder="Enter time in hours"
                    style={inputStyle}
                  />
                </div>

                <div style={inputGroupStyle}>
                  <label style={labelStyle} htmlFor="priority">
                    Priority Level
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    required
                    style={selectStyle}
                  >
                    <option value="" disabled>
                      Select Priority
                    </option>
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Low Priority</option>
                  </select>
                </div>

                <div style={buttonContainerStyle}>
                  <button type="submit" style={generateButtonStyle}>
                    Generate Plan
                  </button>
                </div>
              </form>
            </div>
          </div>

          {showPlan && goals.length > 0 && (
            <div style={{ ...cardStyle, marginTop: '32px' }}>
              <div style={cardContentStyle}>
                <h3 style={planTitleStyle}>Your Study Plan</h3>
                {goals.map((goal, index) => (
                  <div key={goal.id} style={planItemStyle}>
                    <div style={planItemHeaderStyle}>
                      <h4 style={planItemTitleStyle}>
                        {index + 1}. {goal.name}
                      </h4>
                      <span
                        style={{
                          ...priorityTextStyle,
                          color:
                            goal.priority === 'high'
                              ? '#ef4444'
                              : goal.priority === 'medium'
                              ? '#facc15'
                              : '#3b82f6',
                        }}
                      >
                        {goal.priority} Priority
                      </span>
                    </div>
                    <div style={planItemDetailsStyle}>
                      <p style={planItemTextStyle}>
                        Study Duration: {goal.time} hours
                      </p>
                      <p style={planItemTextStyle}>
                        Suggested Breaks: {Math.floor(goal.time / 1.5)} breaks
                        of 15 minutes each
                      </p>
                      <button
                        onClick={() => removeGoal(goal.id)}
                        style={rescheduleButtonStyle}
                      >
                        Reschedule Task
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Inline Styles
const sectionStyle = {
  backgroundColor: '#333333', // Gray tone background
  padding: '80px 0',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const titleStyle = {
  fontSize: '40px',
  fontWeight: '700',
  color: '#ffffff',
  textAlign: 'center',
  marginBottom: '48px',
  letterSpacing: '1px',
};

const formContainerStyle = {
  maxWidth: '640px',
  width: '100%',
};

const cardStyle = {
  background: 'linear-gradient(145deg, #2a2a2a, #3a3a3a)', // Gradient for depth
  borderRadius: '16px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
  border: '1px solid #444444',
  width: '100%', // Ensure card takes full width of its container
  boxSizing: 'border-box', // Include padding and border in width calculation
};

const cardContentStyle = {
  padding: '32px',
  width: '100%',
  boxSizing: 'border-box', // Prevent padding from causing overflow
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
  width: '100%', // Ensure form fits within the card
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%', // Ensure input group fits within the form
};

const labelStyle = {
  fontSize: '16px',
  color: '#e0e0e0',
  fontWeight: '500',
  letterSpacing: '0.5px',
};

const inputStyle = {
  width: '100%', // Ensure input takes full width of its container
  padding: '14px 18px',
  borderRadius: '10px',
  border: '1px solid #555555',
  backgroundColor: '#444444',
  color: '#ffffff',
  fontSize: '16px',
  outline: 'none',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
  boxSizing: 'border-box', // Prevent padding from causing overflow
};

const selectStyle = {
  width: '100%', // Ensure select takes full width of its container
  padding: '14px 18px',
  borderRadius: '10px',
  border: '1px solid #555555',
  backgroundColor: '#444444',
  color: '#ffffff',
  fontSize: '16px',
  outline: 'none',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23a3a3a3' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 18px center',
  backgroundSize: '18px',
  boxSizing: 'border-box', // Prevent padding from causing overflow
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '20px',
  width: '100%', // Ensure button container fits within the form
};

const generateButtonStyle = {
  backgroundColor: '#22c55e', // Green color as requested
  color: '#ffffff',
  padding: '14px 32px',
  border: 'none',
  borderRadius: '10px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

// Plan Styles
const planTitleStyle = {
  fontSize: '24px',
  fontWeight: '700',
  color: '#ffffff',
  marginBottom: '28px',
};

const planItemStyle = {
  marginBottom: '28px',
  paddingBottom: '28px',
  borderBottom: '1px solid #555555',
};

const planItemHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
};

const planItemTitleStyle = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#ffffff',
};

const priorityTextStyle = {
  fontSize: '14px',
  fontWeight: '500',
  padding: '4px 12px',
  borderRadius: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
};

const planItemDetailsStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const planItemTextStyle = {
  fontSize: '14px',
  color: '#b0b0b0',
};

const rescheduleButtonStyle = {
  backgroundColor: 'transparent',
  color: '#22c55e',
  padding: '8px 16px',
  border: '1px solid #22c55e',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  marginTop: '12px',
  transition: 'background-color 0.3s ease, color 0.3s ease',
};

export default GoalInput;