import { ReactNode } from 'react';
import cls from './container.module.scss';
import classes from 'classnames';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={classes(cls.container, className ?? '')}>{children}</div>;
};
