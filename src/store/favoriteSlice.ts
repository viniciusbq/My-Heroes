import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../components/heroesList';

interface FavoritesState {
  favorites: Character[];
  showFavorites: boolean;
}

const initialState: FavoritesState = {
  favorites: [],
  showFavorites: false,
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Character>) {
      const exists = state.favorites.some(
        (character) => character.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(
        (character) => character.id !== action.payload
      );
    },
    setShowFavorites: (state, action: PayloadAction<boolean>) => {
      state.showFavorites = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setShowFavorites } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
