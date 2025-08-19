import { RootState } from 'configs/store/store.ts';

export const getIsAuth = (state: RootState) => state.user.isAuth;
