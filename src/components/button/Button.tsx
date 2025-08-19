import cls from './button.module.scss';
import { ComponentProps, ElementType, useMemo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classes from 'classnames';
import { ButtonTextPosition, ButtonTheme } from './ButtonSchema';
import { IconsPath } from 'components/icon/iconSchema.ts';
import Icon from 'components/icon/Icon.tsx';
import { CommonElementPrefixIcon } from 'components/templateForm/FormElementSchema.ts';
import { Loader } from 'components/loader/Loader.tsx';

interface ButtonOwnProps<E extends ElementType = ElementType> {
  theme?: ButtonTheme;
  textPosition?: ButtonTextPosition;
  width?: string;
  className?: string;
  upperCase?: boolean;
  isLoading?: boolean;
  small?: boolean;
  text?: string;
  prefix?: CommonElementPrefixIcon;
  icon?: IconsPath;
  as?: E;
  to?: E extends 'a' ? string : unknown;
}

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  (E extends 'a' ? LinkProps : Omit<ComponentProps<E>, keyof ButtonOwnProps>);
const CSS_VARS = {
  width: '--button-width',
};

export const Button = <E extends ElementType = 'button'>(props: ButtonProps<E>) => {
  const {
    theme = ButtonTheme.PRIMARY,
    textPosition = ButtonTextPosition.center,
    className,
    text,
    width = 'fit-content',
    upperCase = false,
    as = 'button',
    prefix = CommonElementPrefixIcon.PRE,
    icon,
    small = false,
    isLoading,
    ...other
  } = props;
  const cssVars = useMemo(() => {
    return { [CSS_VARS.width]: width };
  }, [width]);
  const TagName = as;
  const buttonClasses = classes(
    cls.button,
    className ?? '',
    cls[`button__${theme}`],
    cls[`button__${textPosition}`],
    { [cls.button__small]: small },
    { [cls['button__upper_case']]: upperCase },
  );
  if (as === 'a') {
    return (
      <Link className={buttonClasses} to={other.to ?? ''} style={cssVars} aria-disabled={isLoading}>
        {prefix === CommonElementPrefixIcon.PRE && icon && <Icon pathIcon={icon} />}
        {text}
        {prefix === CommonElementPrefixIcon.POST && icon && <Icon pathIcon={icon} />}
        <Loader isShow={!!isLoading} isIcon />
      </Link>
    );
  }
  return (
    <TagName className={buttonClasses} style={cssVars} disabled={isLoading} {...other}>
      {prefix === CommonElementPrefixIcon.PRE && icon && <Icon pathIcon={icon} />}
      {text}
      {prefix === CommonElementPrefixIcon.POST && icon && <Icon pathIcon={icon} />}
      <Loader isShow={!!isLoading} isIcon />
    </TagName>
  );
};
