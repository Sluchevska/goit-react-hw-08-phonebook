import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contactsActions } from "./index";

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  // [contactsActions.]: (_, action) => action.payload,
  // [contactsActions.fetchContactsSuccess]: (_, action) => action.payload
})

const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
    [contactsActions.fetchContactsRequest]: () => false
  
})

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.fetchContactsRequest]:()=> null
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

