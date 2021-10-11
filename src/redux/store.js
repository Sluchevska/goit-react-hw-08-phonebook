/* eslint-disable import/no-anonymous-default-export */
import { configureStore} from "@reduxjs/toolkit";

import contactReducer from "../redux/contacts/contacts-reducers";
import {
    FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
 
  devTools: process.env.NODE_ENV !== "production",
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
