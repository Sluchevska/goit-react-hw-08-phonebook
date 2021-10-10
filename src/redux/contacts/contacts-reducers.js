import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { fetchContacts } from "./contacts-operations";
import { contactsActions } from ".";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  // [contactsActions.]: (_, action) => action.payload,
  // [contactsActions.fetchContactsSuccess]: (_, action) => action.payload
})

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false
  
})

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: null
})

const filter = createReducer("", {
  [contactsActions.changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  isLoading,
  filter,
  error
});




// const items = createReducer([], {
//   [contactsActions.addContact]: (state, { payload }) => {
//     const isNameExist = state.find(
//       (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
//     );
//     const isNumberExist = state.find(
//       (contact) => contact.number === payload.number
//     );
//     if (isNameExist) {
//       alert(`${payload.name} is already in contacts`);
//       return state;
//     }
//     if (isNumberExist) {
//       alert(`${payload.number} is already in contacts`);
//       return state;
//     }
//     return [payload, ...state];
//   },
//   [contactsActions.deleteContact]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
// });

