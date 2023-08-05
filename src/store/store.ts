import { configureStore } from '@reduxjs/toolkit';

import authReducers from './feature/auth/authSlice';
import taskReducers from './feature/task/taskSlice';
import uiModalReducers from './feature/ui/uiModalSlice';


export const store = configureStore({
  reducer: {
    auth: authReducers,
    task: taskReducers,
    modal: uiModalReducers
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;