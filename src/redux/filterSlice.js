import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,

  reducers: {
    updFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { updFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
