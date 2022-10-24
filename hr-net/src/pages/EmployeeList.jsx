import React from 'react';

function EmployeeList() {
  return (
    <>
      <title>HRnet - Current Employees</title>
      <link
        rel="stylesheet"
        href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css"
      />
      <link rel="stylesheet" href="app.css" />
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display" />
        <a href="index.html">Home</a>
      </div>
    </>
  );
}

export default EmployeeList;
