import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsApi from 'services/contacts-api'


export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts", async (_, { rejectWithValue }) => {
    try {
        const contacts = await contactsApi.fetchContacts();
        console.log(contacts)
        return contacts;
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

// export const addContacts = () => async dispatch => {
//     dispatch(contactsActions.fetchContactsRequest())
//    try {
//         const contacts = await contactsApi.addContact()
//     dispatch(contactsActions.fetchContactsSuccess(contacts))
//    } catch (error) {
//        dispatch(contactsActions.fetchContactsError(error))
//    }
// }

// export const fetchContacts = () => async dispatch => {
//     dispatch(contactsActions.fetchContactsRequest())
//    try {
//         const contacts = await contactsApi.fetchContacts()
//     dispatch(contactsActions.fetchContactsSuccess(contacts))
//    } catch (error) {
//        dispatch(contactsActions.fetchContactsError(error))
//    }
// }