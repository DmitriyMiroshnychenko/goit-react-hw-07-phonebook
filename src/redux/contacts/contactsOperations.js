import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'services/contacts-api';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (values, { rejectWithValue }) => {
    try {
      const contact = await contactsApi.addContact(values);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contact = await contactsApi.deleteContact(id);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
