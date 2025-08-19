import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from 'models/user/types.ts';
import { getCookie, removeCookies } from 'utils/cookiesHelpers.ts';
import { TokenList } from 'configs/api/apiTypes.ts';
import { handleNotification } from 'utils/notificationHelpers.ts';

const initialState: UserSchema = {
  isAuth: !!getCookie(TokenList.ACCESS_TOKEN),
};
export const { reducer: userReducer, actions: userActions } = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    logout: state => {
      removeCookies(TokenList.ACCESS_TOKEN, TokenList.REFRESH_TOKEN);
      state.isAuth = false;
      handleNotification('До новых встреч', 'success');
    },
  },
});
export const { setIsAuth, logout } = userActions;
