import cookie, { CookieOptions } from 'cookiejs';

export const options: CookieOptions = {
  path: '/',
};
export const setCookie = (name: string, value: string, option = options) => {
  cookie.set(name, value, option);
};
export const getCookie = (name: string): string | boolean => {
  return cookie.get(name);
};

export const removeCookies = (...name: string[]) => {
  cookie.remove(...name);
};
