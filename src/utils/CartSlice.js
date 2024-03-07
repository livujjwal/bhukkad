import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalBill: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.totalBill = 0;
    },
  },
});
export const { addItem, removeItem, clearCart, checkOut, calculateBill } =
  cartSlice.actions;

export default cartSlice.reducer