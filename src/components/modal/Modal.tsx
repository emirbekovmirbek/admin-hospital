import cls from './modal.module.scss';
import { ReactNode, useEffect, useState } from 'react';
import classes from 'classnames';
import { Portal } from '../portal/Portal';

interface ModalProps {
  isShow: boolean;
  children: ReactNode;
  className?: string;
}

export const Modal = (props: ModalProps) => {
  const {
    isShow,
    children,
    className,
  } = props;
  const [mounted, setMounted] = useState(isShow);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isShow) {
      setMounted(true);
    } else {
      timeout = setTimeout(() => setMounted(false), 400);
    }
    return () => clearTimeout(timeout);
  }, [isShow]);

  if (!mounted) return null;
  return (
    <Portal>
      <div className={classes(cls.wrapper,className ?? '', { [cls.visible]: isShow })}>
        <div>
          {children}
        </div>
      </div>
    </Portal>
  );
};
