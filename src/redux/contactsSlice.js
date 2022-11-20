import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    setItems: (state, action) => {
      state.items.push(action.payload);
    },

    deleteItems: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { setFilter, setItems, deleteItems } = contactsSlice.actions;
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
