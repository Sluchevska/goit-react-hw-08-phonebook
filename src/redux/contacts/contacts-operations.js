/* eslint-disable no-cond-assign */
/* eslint-disable no-ex-assign */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await axios.get('/contacts');
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;
      if ((error = 500)) {
        toast.warn('Server error, please try again');
      }
      return rejectWithValue({ status, statusText });
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      toast.success('Сontact added successfully');
      return await axios.post('/contacts', contact);
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;

      if ((error = 400)) {
        toast.warn('Something went wrong. Try again');
      }

      return rejectWithValue({ status, statusText });
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);

      toast.success('Contact removed successfully');
      return id;
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;
      if ((error = 500)) {
        toast.warn('Server error, please try again');
      }
      return rejectWithValue({ status, statusText });
    }
  },
);
