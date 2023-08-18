// SelectField.js
import React from 'react';

const SelectField = ({ label, options, value, onChange }) => (
  <div className="select-field">
    <label>{label}</label>
    <select value={value} onChange={onChange}>
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;
