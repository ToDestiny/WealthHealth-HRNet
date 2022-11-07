import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { columns } from '../data/columns';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

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

  useEffect(() => {
    const results = data.filter(
      (val) =>
        val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.dateOfBirthForm.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.startDateForm.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.states.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.zip.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(results);
  }, [data, searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
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
