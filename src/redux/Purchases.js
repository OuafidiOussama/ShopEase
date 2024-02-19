import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchases: [],
};

const PurchaseSlice = createSlice({
  name: "purchases",
  initialState,
  reducers: {
	addToHistory(state, action) {
	  state.purchases.push(action.payload);
	},
  },
});

export const { addToHistory } = PurchaseSlice.actions;

export default PurchaseSlice.reducer;