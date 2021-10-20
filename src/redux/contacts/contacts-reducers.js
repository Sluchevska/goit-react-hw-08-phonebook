import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contacts-actions';
import { addContact, deleteContact, fetchContacts } from './contacts-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_state, action) => action.payload.data,
 
  [addContact.fulfilled]: (state, { payload }) => {
    if (state.find(contact => contact.name.toLowerCase() === payload.data.name.toLowerCase())) {
      alert(`${payload.data.name} is already in contacts`);
      return state;
    }
     console.log(payload.data)
    return [payload.data, ...state];
  },
  [deleteContact.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_state, { payload }) => payload,
});

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,

})

const error = createReducer(null, {
    [fetchContacts.pending]: null,
    [fetchContacts.rejected]: (_state, action) => action.payload,
    [addContact.pending]: null,
    [addContact.rejected]: (_state, action) => action.payload,
    [deleteContact.pending]: null,
    [deleteContact.rejected]: (_state,action) => action.payload,
})

export default combineReducers({
  items,
    filter,
    isLoading,
  error
});
