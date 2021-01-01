import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    busesData: [],
    muzeumData: [],
    snackbar: {},
  },
  reducers: {
    setbusesData: (state, action) => {
      state.busesData = action.payload.busesData;
    },
    setmuzeumData: (state, action) => {
      state.muzeumData = action.payload.muzeumData;
    },
    setsnackbar: (state, action) => {
      state.snackbar = action.payload.snackbar;
    },
  },
});

export const { setbusesData, setmuzeumData, setsnackbar } = appSlice.actions;

export const selectBusesData = state => state.app.busesData;
export const selectMuzeumData = state => state.app.muzeumData;
export const selectsnackbar = state => state.app.snackbar;
export const selectselectedbus = state => state.app.selectedbus;

export default appSlice.reducer;
