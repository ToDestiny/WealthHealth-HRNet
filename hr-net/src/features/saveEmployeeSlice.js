import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  department: '',
};

export const saveEmployeeSlice = createSlice({
  name: 'save',
  initialState,
  reducers: {
    setSaveUser: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { setSaveUser } = saveEmployeeSlice.actions;

export default saveEmployeeSlice.reducer;
