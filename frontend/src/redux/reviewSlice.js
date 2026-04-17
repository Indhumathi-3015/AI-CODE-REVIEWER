import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const reviewCode = createAsyncThunk(
  "review/reviewCode",
  async ({ code, language }) => {
    const response = await axios.post("http://127.0.0.1:8000/review", {
      code,
      language,
    });
    return response.data.review;
  },
);

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    review: "",
    loading: false,
    error: null,
  },
  reducers: {
    clearReview: (state) => {
      state.review = "";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(reviewCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(reviewCode.fulfilled, (state, action) => {
        state.loading = false;
        state.review = action.payload;
      })
      .addCase(reviewCode.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong. Please try again.";
      });
  },
});

export const { clearReview } = reviewSlice.actions;
export default reviewSlice.reducer;
