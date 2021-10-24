import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async (credentials,{ rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    toast.success( `The user has been successfully created. Welcome, ${data.user.name}!`);
    return data;
  } catch (error) {
     
    const {
        response: { status, statusText },
    } = error;
   
      // eslint-disable-next-line no-ex-assign
      if (error = 400) {
    toast.warn('An account with the specified mail already exists.!');
    }
    
  
    return rejectWithValue({status, statusText});
  }
});

const logIn = createAsyncThunk('auth/login', async (credentials,{ rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_state,{ rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) { return rejectWithValue(error.data);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_state, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
     return thunkAPI.rejectWithValue(error.data);
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
