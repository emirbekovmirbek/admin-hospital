import { jwtDecode } from 'jwt-decode';
import { getCookie } from 'utils/cookiesHelpers.ts';
import { TokenList } from 'configs/api/apiTypes.ts';
export const decodeJwt = () => {
  return jwtDecode<TokenInfo>(getCookie(TokenList.ACCESS_TOKEN) as string);
};
