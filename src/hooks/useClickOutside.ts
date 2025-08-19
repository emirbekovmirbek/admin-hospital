import { RefObject, useEffect } from 'react';

export const useClickOutside = <T extends Element>(
  template: RefObject<T> | null,
  callClick: () => void,
  callClickOutSide: () => void,
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (template && template.current && template.current.contains(event.target as Node | null)) {
        callClick();
      } else {
        callClickOutSide();
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [callClick, callClickOutSide, template]);
};
