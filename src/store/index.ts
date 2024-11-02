import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';
import favoriteReducer from './favoriteSlice';
import characterReducer from './charactersSlice';
import searchReducer from './searchSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
const persistConfig = {
  key: 'favorites',
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    favorites: persistedReducer,
    character: characterReducer,
    search: searchReducer,
  },
});
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
