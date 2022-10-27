import React from 'react';
import DataTable from 'react-data-table-component';
import { columns } from '../data/columns';
// import { store } from '../app/store';

const data = [
  {
    id: 1,
    firstName: 'Beetlejuice',
    lastName: 'Blabla',
  },
  {
    id: 2,
    firstName: 'Ghostbusters',
    lastName: '1984',
  },
  {
    id: 3,
    firstName: 'Beetlejuice',
    lastName: 'Blabla',
  },
  {
    id: 4,
    firstName: 'Ghostbusters',
    lastName: '1984',
  },
  {
    id: 5,
    firstName: 'Beetlejuice',
    lastName: 'Blabla',
  },
  {
    id: 6,
    firstName: 'Ghostbusters',
    lastName: '1984',
  },
  {
    id: 7,
    firstName: 'Beetlejuice',
    lastName: 'Blabla',
  },
  {
    id: 8,
    firstName: 'Ghostbusters',
    lastName: '1984',
  },
  {
    id: 9,
    firstName: 'Beetlejuice',
    lastName: 'Blabla',
  },
  {
    id: 10,
    firstName: 'Ghostbusters',
    lastName: '1984',
  },
  {
    id: 11,
    firstName: 'Beetlejuice',
    lastName: 'Blabla',
  },
  {
    id: 12,
    firstName: 'Ghostbusters',
    lastName: '1984',
  },
  {
    id: 13,
    firstName: 'Beetlejuice',
    lastName: 'Blabla',
  },
  {
    id: 14,
    firstName: 'Ghostbusters',
    lastName: '1984',
  },
  {
    id: 15,
    firstName: 'Beetlejuice',
    lastName: 'Blabla',
  },
  {
    id: 16,
    firstName: 'Ghostbusters',
    lastName: '1984',
  },
];

function EmployeeList() {
  return (
    <>
      <title>HRnet - Current Employees</title>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display" />
        <a href="/profile">Home</a>

        <DataTable columns={columns} data={data} pagination />
      </div>
    </>
  );
}

export default EmployeeList;
