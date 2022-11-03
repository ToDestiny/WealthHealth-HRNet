import { createSlice } from '@reduxjs/toolkit';

export const saveEmployeeSlice = createSlice({
  name: 'save',
  initialState: [],
  reducers: {
    saveFormValue: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { saveFormValue } = saveEmployeeSlice.actions;

export default saveEmployeeSlice.reducer;
