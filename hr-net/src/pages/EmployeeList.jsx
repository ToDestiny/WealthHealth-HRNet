import React from 'react';

function EmployeeList() {
  return (
    <>
      <title>HRnet - Current Employees</title>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display" />
        <a href="/profile">Home</a>
      </div>
    </>
  );
}

export default EmployeeList;
