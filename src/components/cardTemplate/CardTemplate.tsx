import cls from './cardTemplate.module.scss';
import { ReactNode } from 'react';
import classes from 'classnames';

interface CardTemplateProps {
  children: ReactNode;
  className?: string;
}
export const CardTemplate = ({ className, children }: CardTemplateProps) => {
  return <div className={classes(cls.card, className ?? '')}>{children}</div>;
};
