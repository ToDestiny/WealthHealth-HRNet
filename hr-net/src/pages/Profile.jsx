import React from 'react';
import { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import { options } from '../assets/departments';
import { states } from '../assets/states';

const initialState = {
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  zip: '',
};

function Profile() {
  const [formValue, setFormValue] = useState(initialState);
  const [isSubmit, setSubmit] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [selectedStateOption, setSelectedStateOption] = useState(null);
  const [selectedDepartmentOption, setSelectedDepartmentOption] =
    useState(null);

  const { firstName, lastName, street, city, zip } = formValue;

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  function handleSubmit() {
    setSubmit(true);
  }

  useEffect(() => {
    if (isSubmit) {
      setSubmit(false);
      console.log(formValue);
      console.log(dateOfBirth);
      console.log(startDate);
      console.log(selectedStateOption);
      console.log(selectedDepartmentOption);
      alert('You succesfully registered!');
    }
    //eslint-disable-next-line
  }, [isSubmit]);

  return (
    <>
      <title>HRnet</title>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="/employee-list">View Current Employees</a>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            name="firstName"
            onChange={handleChange}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            name="lastName"
            onChange={handleChange}
          />
          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker onChange={setDateOfBirth} value={dateOfBirth} />
          <label htmlFor="start-date">Start Date</label>
          <DatePicker onChange={setStartDate} value={startDate} />
          <fieldset className="address">
            <legend>Address</legend>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              value={street}
              name="street"
              onChange={handleChange}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              name="city"
              onChange={handleChange}
            />
            <label htmlFor="state">State</label>
            <Select
              defaultValue={selectedStateOption}
              onChange={setSelectedStateOption}
              options={states}
              placeholder="Select an option"
            />
            <label htmlFor="zip-code">Zip Code</label>
            <input
              name="zip"
              id="zip"
              value={zip}
              type="number"
              onChange={handleChange}
            />
          </fieldset>
          <label htmlFor="department">Department</label>
          <Select
            defaultValue={selectedDepartmentOption}
            onChange={setSelectedDepartmentOption}
            options={options}
            placeholder="Select an option"
          />
        </form>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </>
  );
}

export default Profile;
