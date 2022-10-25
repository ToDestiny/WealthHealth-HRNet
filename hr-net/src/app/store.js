import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { saveReducer } from '../features/saveEmployeeSlice';

export const store = configureStore({
  reducer: {
    save: saveReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(saveReducer.middleware),
});

setupListeners(store.dispatch);
export default store;
