import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { columns } from '../data/columns';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import styled from 'styled-components';

const SearchBar = styled.input`
  position: fixed;
  margin-left: 50rem;
  width: 10rem;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function EmployeeList() {
  const [searchTerm, setSearchTerm] = useState('');

  const data = useSelector((state) => state.save);
  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (e) => {
    console.log(e);
    setSearchTerm(e.target.value);
    let temp = data.filter((val) => {
      if (searchTerm === '') {
        return val;
      } else if (
        val.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      } else if (
        val.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      } else if (
        val.dateOfBirthForm.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      } else if (
        val.startDateForm.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      } else if (
        val.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      } else if (val.states.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      } else if (val.street.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      } else if (val.zip.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      } else if (
        val.department.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      } else if (val.city.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
      // ine 30:34:  Array.prototype.filter() expects a value to be returned at the end of arrow function
    });
    console.log(temp);
    setFilteredData(temp);
  };
  return (
    <>
      <title>HRnet - Current Employees</title>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display" />
        <Container>
          <Link to="/profile">Home</Link>
          <SearchBar
            type="text"
            placeholder="Search..."
            onChange={handleChange}
          />
        </Container>

        <DataTable columns={columns} data={filteredData} pagination />
      </div>
    </>
  );
}

export default EmployeeList;
