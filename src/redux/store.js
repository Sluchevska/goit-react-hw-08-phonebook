/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from '@reduxjs/toolkit';

import contactReducer from '../redux/contacts/contacts-reducers';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
