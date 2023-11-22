import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, updateInfo } from './operations';

const initialState = {
  user: {
    username: null,
    email: null,
    height: null,
    currentWeight: null,
    desiredWeight: null,
    birthday: null,
    blood: null,
    sex: null,
    levelActivity: null,
    avatarURL: null,
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: true,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = true;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(updateInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateInfo.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(updateInfo.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
