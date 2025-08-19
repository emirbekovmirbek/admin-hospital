import { useCallback, useState } from 'react';

export const useToggle = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleToggle = useCallback(() => {
    setIsShow(prev => !prev);
  }, []);
  const handleOpen = useCallback(() => {
    setIsShow(true);
  }, []);
  const handleClose = useCallback(() => {
    setIsShow(false);
  }, []);
  return {
    isShow,
    handleToggle,
    handleClose,
    handleOpen
  };
};
