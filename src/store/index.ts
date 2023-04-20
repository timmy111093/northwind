import {configureStore} from '@reduxjs/toolkit';
import productsReducer from '../components/productsArea/productsSlice';
import authReducer from '../auth/authSlice';

const store = configureStore({
      reducer:{
            productsState: productsReducer,
            authState: authReducer
      }
});

// infer the "RootState" and "AppDispatch"
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
