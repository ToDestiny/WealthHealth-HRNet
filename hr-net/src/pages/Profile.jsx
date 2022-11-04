import React from 'react';
import { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { options } from '../assets/departments';
import { states } from '../assets/states';
import Modal from '../components/Modal';
import styled from 'styled-components';
import { saveFormValue } from '../features/saveEmployeeSlice';

const Overlay = styled.div`
  z-index: -1;
`;

let initialState = {
  firstName: '',
  lastName: '',
  dateOfBirthForm: '',
  startDateForm: '',
  street: '',
  city: '',
  zip: '',
  states: '',
  department: '',
};

const Button = styled.button`
  margin-top: 1rem;
`;

function Profile() {
  const [formValue, setFormValue] = useState(initialState);
  const [isSubmit, setSubmit] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [selectedStateOption, setSelectedStateOption] = useState();
  const [selectedDepartmentOption, setSelectedDepartmentOption] = useState();
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const { firstName, lastName, street, city, zip } = formValue;

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleDateOfBirth = (e) => {
    const calculatedDate =
      e.getDate() + '/' + (e.getMonth() + 1) + '/' + e.getFullYear();
    setDateOfBirth(e);
    setFormValue({ ...formValue, dateOfBirthForm: calculatedDate });
  };

  const handleStartDate = (e) => {
    const calculatedDate =
      e.getDate() + '/' + (e.getMonth() + 1) + '/' + e.getFullYear();
    setStartDate(e);
    setFormValue({ ...formValue, startDateForm: calculatedDate });
  };

  const handleState = (e) => {
    setSelectedStateOption(e);
    setFormValue({ ...formValue, states: e.abbreviation });
  };

  const handleDepartment = (e) => {
    setSelectedDepartmentOption(e);
    setFormValue({ ...formValue, department: e.label });
  };

  function handleSubmit() {
    if (firstName && lastName) {
      setOpenModal(true);
      setSubmit(true);
    } else {
      console.log(formValue);
      alert('Please fill in the form.');
    }
  }

  useEffect(() => {
    setFormValue({
      ...formValue,
    });
    if (isSubmit) {
      setSubmit(false);

      dispatch(saveFormValue(formValue));
      setOpenModal(true);
    }
    //eslint-disable-next-line
  }, [isSubmit]);

  return (
    <Overlay>
      <title>HRnet</title>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label>First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            name="firstName"
            onChange={handleChange}
          />
          <label>Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            name="lastName"
            onChange={handleChange}
          />
          <label>Date of Birth</label>
          <DatePicker onChange={handleDateOfBirth} value={dateOfBirth} />
          <label>Start Date</label>
          <DatePicker onChange={handleStartDate} value={startDate} />
          <fieldset className="address">
            <legend>Address</legend>
            <label>Street</label>
            <input
              type="text"
              id="street"
              value={street}
              name="street"
              onChange={handleChange}
            />
            <label>City</label>
            <input
              type="text"
              id="city"
              value={city}
              name="city"
              onChange={handleChange}
            />
            <label>State</label>
            <Select
              defaultValue={selectedStateOption}
              onChange={handleState}
              options={states}
              placeholder="Select an option"
            />
            <label>Zip Code</label>
            <input
              name="zip"
              id="zip"
              value={zip}
              type="number"
              onChange={handleChange}
            />
          </fieldset>
          <label>Department</label>
          <Select
            defaultValue={selectedDepartmentOption}
            onChange={handleDepartment}
            options={options}
            placeholder="Select an option"
          />
        </form>
        <Button onClick={handleSubmit}>Save</Button>

        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </Overlay>
  );
}

export default Profile;
