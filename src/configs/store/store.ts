import { configureStore } from '@reduxjs/toolkit';
import { reducerPatient } from 'models/patient/slice.ts';
import { reducerAppointment } from 'models/appointment/slice.ts';
import { userReducer } from 'models/user/slice.ts';
import { rtkApi } from 'configs/api/apiQuery.ts';
import { authApi } from 'models/user/api.ts';

export const store = configureStore({
  reducer: {
    patient: reducerPatient,
    appointment: reducerAppointment,
    user: userReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat([rtkApi.middleware, authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export interface ThunkConfig<T> {
  rejectValue: T;
  state: RootState;
}
