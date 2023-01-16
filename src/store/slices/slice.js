import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allBeerItems: []
};

export const beerSlice = createSlice({
    name: 'beerState',
    initialState,
    reducers: {
        setBeerState(state, action) {
            state.allBeerItems = action.payload;
        },
    },
});

export const { setBeerState } = beerSlice.actions;
export const selectBeerState = (state) => state.beerState;
export default beerSlice.reducer;
