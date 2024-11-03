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

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

const logger = createLogger({
  collapsed: true,
});

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    favorites: persistedReducer,
    character: characterReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
