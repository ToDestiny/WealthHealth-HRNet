import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  street: '',
  city: '',
  state: [],
  zip: '',
  department: [],
};

export const saveEmployeeSlice = createSlice({
  name: 'save',
  initialState,
  reducers: {
    saveFormValue: (state, action) => {
      console.log(action.payload);
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.dateOfBirth = action.payload.dateOfBirthForm;
      state.startDate = action.payload.startDateForm;
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.zip = action.payload.zip;
      state.state = action.payload.state;
      state.department = action.payload.department;
    },
  },
});

export const { saveFormValue } = saveEmployeeSlice.actions;

export default saveEmployeeSlice.reducer;
