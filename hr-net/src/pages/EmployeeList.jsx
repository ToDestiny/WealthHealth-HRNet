import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { columns } from '../data/columns';
import { useSelector } from 'react-redux';

function EmployeeList() {
  const data = useSelector((state) => state.save);
  return (
    <>
      <title>HRnet - Current Employees</title>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display" />
        <Link to="/profile">Home</Link>

        <DataTable columns={columns} data={data} pagination />
      </div>
    </>
  );
}

export default EmployeeList;
