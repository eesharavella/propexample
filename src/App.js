import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import './App.css';

const ParentComponent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [college, setCollege] = useState('');
  const [course, setCourse] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleCollegeChange = (event) => {
    setCollege(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  return (
    <div className='Main' style={{textAlign: 'center'}}>
      <h1>User Details</h1>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <label>College: </label>
        <input type="text" value={college} onChange={handleCollegeChange} />
      </div>
      <div>
        <label>Course: </label>
        <input type="text" value={course} onChange={handleCourseChange} />
      </div>
      <ChildComponent name={name} age={age} college={college} course={course} />
    </div>
  );
};

export default ParentComponent;
