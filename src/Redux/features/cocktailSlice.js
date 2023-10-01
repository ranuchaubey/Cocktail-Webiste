import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// thunk middleware function ye cocktail ka response de rha hai
export const fetchCocktails = createAsyncThunk(
  "cocktail/fetchCocktails",
  async () => {
    return await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
    ).then((res) => res.json());
  }
);

export const fetchCocktail = createAsyncThunk(
  "cocktail/fetchCocktail",
  async ({ id }) => {
    return await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then(res=>res.json())
  }
);
export const searchCocktail = createAsyncThunk("cocktail/searchCocktail", 
  async ({ searchText }) => {
    return await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    ).then((res) => res.json());
  }
);
// ye slice hai
const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: { loading: false, cocktails: [], error: null, cocktail: [] },
  extraReducers: {
    [fetchCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktail = action.payload.drinks;
    },
    [fetchCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [searchCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [searchCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [searchCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default cocktailSlice.reducer;
