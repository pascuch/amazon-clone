import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
        state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(e => e.id === action.payload)
      let newBasket = [...state.items]
      if(index >= 0) newBasket.splice(index, 1)
      state.items = newBasket
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectedItems = (state) => state.basket.items
export const selectTotal = state => state.basket.items.reduce((total, items) => total + items.price, 0)

export default basketSlice.reducer;
