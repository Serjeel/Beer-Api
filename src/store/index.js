import { configureStore } from '@reduxjs/toolkit';
import { beerSlice } from './slices/slice';

const store = configureStore({
    reducer: {
      [beerSlice.name]: beerSlice.reducer,
    }
  });

export default store;
