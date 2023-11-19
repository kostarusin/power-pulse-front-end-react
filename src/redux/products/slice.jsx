import { createSlice } from '@reduxjs/toolkit';
import { fetchProductCategories, fetchProducts } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
    categories: [],
    filter: '',
    filterRec: '',
    filterByText: '',
  },
  reducers: {
    findProduct(state, action) {
      state.filter = action.payload;
    },
    findProductByRec(state, action) {
      state.filterRec = action.payload;
    },
    findProductByText(state, action) {
      state.filterByText = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, handleRejected)

      .addCase(fetchProductCategories.pending, handlePending)
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(fetchProductCategories.rejected, handleRejected),
});

export const productsReducer = productsSlice.reducer;
export const { findProduct, findProductByRec, findProductByText } =
  productsSlice.actions;
