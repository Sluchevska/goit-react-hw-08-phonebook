import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contacts-actions';
import initialContacts from '../data/initialContacts.json';

const items = createReducer([], {
  [fetchContactsAction.fulfilled]: (_state, action) => action.payload.data,
  [addContactAction.fulfilled]: (state, { payload }) => {
    if (state.find(contact => contact.name.toLowerCase() === payload.data.name.toLowerCase())) {
      alert(`${payload.data.name} is already in contacts`);
      return state;
    }
    return [payload.data, ...state];
  },
  [deleteContactAction.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
