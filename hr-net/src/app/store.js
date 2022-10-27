import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import saveReducer from '../features/saveEmployeeSlice';

export const store = configureStore({
  reducer: {
    save: saveReducer,
  },
});

setupListeners(store.dispatch);
export default store;
