// InterestsForm.js
import React, { useState } from 'react';
import SelectField from './SelectField';

const InterestsForm = () => {
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  const [areasOfInterest, setAreasOfInterest] = useState('');

  const handleFieldOfStudyChange = (event) => {
    setFieldOfStudy(event.target.value);
  };

  const handleSkillLevelChange = (event) => {
    setSkillLevel(event.target.value);
  };

  const handleAreasOfInterestChange = (event) => {
    setAreasOfInterest(event.target.value);
  };

  return (
    <div className="interests-form">
      <h2>Interests, Academic Background, and Career Goals</h2>
      <SelectField
        label="Field of Study"
        options={['Computer Science', 'Engineering', 'Biology', 'History', 'Mathematics']}
        value={fieldOfStudy}
        onChange={handleFieldOfStudyChange}
      />
      <SelectField
        label="Skill Level"
        options={['Beginner', 'Intermediate', 'Advanced']}
        value={skillLevel}
        onChange={handleSkillLevelChange}
      />
      <div className="text-area-field">
        <label>Areas of Interest</label>
        <textarea
          value={areasOfInterest}
          onChange={handleAreasOfInterestChange}
          rows={4}
          placeholder="Enter your areas of interest..."
        />
      </div>
    </div>
  );
};

export default InterestsForm;
