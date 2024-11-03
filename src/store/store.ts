import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';
import favoriteReducer from './favoriteSlice';
import characterReducer from './charactersSlice';
import searchReducer from './searchSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
};
const characterPersistConfig = {
  key: 'character',
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);
const persistedCharacterReducer = persistReducer(
  characterPersistConfig,
  characterReducer
);

const logger = createLogger({
  collapsed: true,
});

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    favorites: persistedReducer,
    character: persistedCharacterReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
