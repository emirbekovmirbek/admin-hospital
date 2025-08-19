import cls from './filterTemplate.module.scss';
import { ReactNode } from 'react';
import classes from 'classnames';
import { Portal } from 'components/portal/Portal';

interface FilterTemplateProps {
  onClose: () => void;
  isShow: boolean;
  children: ReactNode;
  title?: string;
}
export const FilterTemplate = (props: FilterTemplateProps) => {
  const { onClose, isShow, title = 'Фильтрация', children } = props;
  return (
    <Portal>
      <div className={classes(cls.wrapper, { [cls.visible]: isShow })}>
        <div className={cls.overlay} onClick={onClose} />
        <div className={cls.content}>
          <h4>{title}</h4>
          {children}
        </div>
      </div>
    </Portal>
  );
};
