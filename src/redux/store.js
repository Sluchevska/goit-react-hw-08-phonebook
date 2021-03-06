/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import contactReducer from './contacts/contacts-reducers';



const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
       auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
     
       serializableCheck: false,
   
    }),
});

export const persistor = persistStore(store);
