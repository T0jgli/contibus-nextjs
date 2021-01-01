import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper'
import AppReducer from './AppSlice';


const store = () => configureStore({
  reducer: {
    app: AppReducer
  },
});

export const wrapper = createWrapper(store)