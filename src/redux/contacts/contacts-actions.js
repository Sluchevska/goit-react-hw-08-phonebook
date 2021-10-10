import { createAction } from '@reduxjs/toolkit';


// export const fetchContactsRequest = createAction('contacts/fetchContactsRequest')
// export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess')
// export const fetchContactsError = createAction('contacts/fetchContactsError')

export const deleteContact = createAction('contacts/deleteContact');

export const changeFilter = createAction('contacts/changeFilter');


// eslint-disable-next-line import/no-anonymous-default-export

