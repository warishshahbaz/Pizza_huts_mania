import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../store/slice/cartSlice";

export const store = configureStore({
  reducer: {
    cartItem: cartSlice,
  },
});
