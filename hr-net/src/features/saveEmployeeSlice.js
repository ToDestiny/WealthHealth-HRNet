import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
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
