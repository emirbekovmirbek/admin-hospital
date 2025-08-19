import { toast, ToastOptions } from 'react-toastify';
import { ReactNode } from 'react';

type TypeToast = 'success' | 'error' | 'warning' | 'info';
export const handleNotification = (
  text: ReactNode,
  type: TypeToast = 'info',
  config?: ToastOptions,
) => {
  toast[type](text, config);
};
