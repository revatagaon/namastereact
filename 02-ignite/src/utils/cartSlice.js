import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload)
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
      // or
      return [{ items: [] }];


      // if you do as follws then state wont be changes
      // console.log(state);
      // console.log(current(state));
      // state = [];
      // console.log(state);
      // Since the state used in the current method is the original state and it cannot be made empty directly
      // as I made in the line number 20, its the local varible and creates a different reference to that state
    }
  }
})

export const { addItems, removeItems, clearCart } = cartSlice.actions

export default cartSlice.reducer