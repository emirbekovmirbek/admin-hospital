import cls from './dropdown.module.scss';
import { ReactNode, useState, useRef } from 'react';
import { IconsPath } from '../icon/iconSchema';
import classes from 'classnames';
import { useClickOutside } from 'hooks/useClickOutside';
import Icon from 'components/icon/Icon.tsx';

/**
 * Компонента Dropdown.
 * @param {children} - контент dropdown ReactNode.
 * @param {buttonText} - заполнения текс или ReactNode.
 * @param {widthDropdown} - ширина dropdown.
 * @param {direction} - направление dropdown.
 */

interface DropdownProps {
  buttonText: ReactNode;
  children: ReactNode;
  className?: string;
  direction?: 'top_left' | 'top_right' | 'bottom_left' | 'bottom_right';
  widthDropdown?: string;
}

export const Dropdown = (props: DropdownProps) => {
  const {
    buttonText,
    className,
    children,
    direction = 'bottom_right',
    widthDropdown = '100%',
  } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => setIsOpen(false);
  useClickOutside(ref, handleToggle, handleClose);
  return (
    <div
      className={classes(cls.dropdown_wrapper, className ?? '', { [cls.dropdown_open]: isOpen })}
      ref={ref}
    >
      <button>
        {buttonText}
        <Icon pathIcon={IconsPath.CHEVRON_ICON} />
      </button>
      <div style={{ width: widthDropdown }} className={cls[direction]}>
        <div>{children}</div>
      </div>
    </div>
  );
};
