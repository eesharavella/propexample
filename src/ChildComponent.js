import React from 'react';

const ChildComponent = (props) => {
  const { name, age, college, course } = props;

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>College: {college}</p>
      <p>Course: {course}</p>
    </div>
  );
};

export default ChildComponent;
