import cls from './loader.module.scss';
import { memo } from 'react';
import classes from 'classnames';
import Icon from 'components/icon/Icon.tsx';
import { IconsPath } from 'components/icon/iconSchema.ts';

interface LoaderProps {
  className?: string;
  isPageLoader?: boolean;
  isShow: boolean;
  position?: 'absolute' | 'fixed' | 'relative';
  isIcon?: boolean;
}
export const Loader = memo((props: LoaderProps) => {
  const { className, isPageLoader = false, isShow, position = 'relative', isIcon } = props;
  if (isIcon && isShow) {
    return <Icon pathIcon={IconsPath.SPINNER_ICON} />;
  }
  return (
    <div
      className={classes(
        cls.loader,
        { [cls.loader_show]: isShow },
        { [cls.page_loader]: isPageLoader },
        { [cls[position]]: position },
        className ?? '',
      )}
    >
      <div className={cls['lds-ellipsis']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
});
