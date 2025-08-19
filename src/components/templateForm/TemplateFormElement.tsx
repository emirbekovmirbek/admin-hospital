import cls from './templateFormElement.module.scss';
import { memo } from 'react';
import classes from 'classnames';
import { CommonElementPrefixIcon, type CommonFormElementProps } from './FormElementSchema';
import Icon from 'components/icon/Icon.tsx';

type TemplateFormElementProps = CommonFormElementProps & {
  show?: boolean;
  onHandleClickIcon?: () => void;
};
const TemplateFormElement = (props: TemplateFormElementProps) => {
  const {
    className,
    label = '',
    error = '',
    secondary,
    icon,
    onHandleClickIcon = () => {},
    prefix = CommonElementPrefixIcon.POST,
    children,
  } = props;
  const handleClickIcon = () => {
    onHandleClickIcon?.();
  };
  return (
    <div
      className={classes(
        className ?? '',
        cls['form_element_template'],
        { [cls['form_element_template--secondary']]: secondary },
        { [cls['form_element_template--invalid']]: error.length > 0 },
      )}
    >
      <span className={classes(cls.label, { [cls.label_hidden]: !label })}>{label}</span>
      <label>
        {prefix === CommonElementPrefixIcon.PRE && icon && (
          <Icon pathIcon={icon} onClick={handleClickIcon} />
        )}
        {children}
        {prefix === CommonElementPrefixIcon.POST && icon && (
          <Icon pathIcon={icon} onClick={handleClickIcon} />
        )}
      </label>
    </div>
  );
};
export default memo(TemplateFormElement);
