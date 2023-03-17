import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  count: 0,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    increament: (state, action) => {
      let upDateCart = state.data.map((val) => {
        if (action.payload.id === val.id) {
          return { ...val, count: val.count + 1 };
        }
        return val;
      });
      return { ...state, data: upDateCart };
    },
    decreament: (state, action) => {
      let upDateCart = state.data
        .map((val) => {
          if (action.payload.id === val.id) {
            return { ...val, count: val.count - 1 };
          }
          return val;
        })
        .filter((val) => val.count !== 0);
      return { ...state, data: upDateCart };
    },
    clearCart: (state, action) => {
      return { ...state, data: [] };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItem, increament, decreament } = cartSlice.actions;

export default cartSlice.reducer;
