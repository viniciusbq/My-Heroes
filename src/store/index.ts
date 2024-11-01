import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';
import favoriteReducer from './favoriteSlice';
import characterReducer from './charactersSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    favorites: favoriteReducer,
    character: characterReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
