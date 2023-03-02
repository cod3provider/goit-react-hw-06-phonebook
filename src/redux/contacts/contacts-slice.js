import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const persistedContactReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
