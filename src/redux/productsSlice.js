import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle", // 'idle' || 'loading' || 'succeded || 'failed'
  error: null,
};

export const fecthProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return [...response.data];
    } catch (error) {
      return error.message;
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fecthProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fecthProducts.fulfilled, (state, action) => {
        state.status = "succeded";
        const loadedProducts = action.payload.map(product => {
          product.hasPrime = Math.random() < 0.5
          return product
        })
        state.products = loadedProducts
      })
      .addCase(fecthProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addToproducts, removeFromproducts } = productsSlice.actions;

export const selectAllProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

export default productsSlice.reducer;
