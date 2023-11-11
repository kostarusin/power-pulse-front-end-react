import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// }

export const store = configureStore({
    reducer: {
        exercises: exercisesReduces,
    //   auth: persistReducer(authPersistConfig, authReducer),
    //   products: productsReducer,
    //   diary: diaryReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
  });
  
  export const persistedStore = persistStore(store);