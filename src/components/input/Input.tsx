import cls from './input.module.scss';
import { ChangeEvent, forwardRef, InputHTMLAttributes, useState } from 'react';
import TemplateFormElement from 'components/templateForm/TemplateFormElement.tsx';
import type { CommonFormElementProps } from 'components/templateForm/FormElementSchema.ts';
import { IconsPath } from 'components/icon/iconSchema.ts';
import classes from 'classnames';

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  CommonFormElementProps & {
    regex?: RegExp;
  };
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    regex,
    label,
    error,
    icon,
    prefix,
    secondary,
    required,
    type,
    onChange,
    ...inputProps
  } = props;
  const [isShow, setIsShow] = useState(false);
  const handleToggleType = () => setIsShow(prev => !prev);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (regex) {
      e.target.value = e.target.value.replace(regex, '');
    }
    onChange?.(e);
  };
  if (type === 'password') {
    return (
      <TemplateFormElement
        className={classes(className, { [cls.show]: isShow })}
        label={label}
        error={error}
        icon={IconsPath.EYE_ICON}
        prefix={prefix}
        secondary={secondary}
        required={required}
        onHandleClickIcon={handleToggleType}
      >
        <input
          ref={ref}
          onChange={handleChange}
          type={isShow ? 'text' : 'password'}
          {...inputProps}
        />
      </TemplateFormElement>
    );
  }
  return (
    <TemplateFormElement
      className={className}
      label={label}
      error={error}
      icon={icon}
      prefix={prefix}
      secondary={secondary}
      required={required}
    >
      <input ref={ref} onChange={handleChange} type={type} {...inputProps} />
    </TemplateFormElement>
  );
});
