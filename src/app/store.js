import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web

import todoReducer from '../features/todoslice';

// Root reducer combining all your reducers
const rootReducer = combineReducers({
  todos: todoReducer,
  // Add other reducers here if you have more slices
});

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos'], // Reducers to persist (only 'todos' in this case)
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and export your Redux store
export const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor object to persist the Redux store
export const persistor = persistStore(store);
