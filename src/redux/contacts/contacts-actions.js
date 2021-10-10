import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// export const addContact = createAction('contacts/addContact', (name, number) => {
//   return {
//     payload: {
//       id: uuidv4(),
//       name,
//       number,
//     },
//   };
// });
export const fetchContactsRequest = createAction('contacts/fetchContactsRequest')
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess')
export const fetchContactsError = createAction('contacts/fetchContactsError')

export const deleteContact = createAction('contacts/deleteContact');

export const changeFilter = createAction('contacts/changeFilter');


// eslint-disable-next-line import/no-anonymous-default-export

