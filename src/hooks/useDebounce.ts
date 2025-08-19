/* eslint-disable @typescript-eslint/no-explicit-any*/

import { MutableRefObject, useCallback, useRef } from 'react';

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const timer = useRef(null) as MutableRefObject<any>;

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};
