import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    entities: [],
    filter: '',
    status: null,
    error: null,
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    // GET
    [getContacts.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.status = 'resolved';
      state.entities = payload;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
    // ADD
    [addContact.pending]: state => {
      state.status = 'addLoading';
      state.error = null;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.status = 'addResolved';
      state.entities.push(payload);
    },
    [addContact.rejected]: (state, { payload }) => {
      state.status = 'addRejected';
      state.error = payload;
    },
    // DELETE
    [deleteContact.pending]: state => {
      state.status = 'deleteLoading';
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.status = 'deleteResolved';
      state.entities = state.entities.filter(item => item.id !== payload.id);
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.status = 'deleteRejected';
      state.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { setFilter } = contactsSlice.actions;
