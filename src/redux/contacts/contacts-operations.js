import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      return await axios.get('/contacts');
    } catch (error) {}
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    return await axios.post('/contacts', contact);
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    await axios.delete(`/contacts/${id}`);
    return id;
  },
);
