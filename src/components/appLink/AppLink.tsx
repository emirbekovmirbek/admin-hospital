import classes from 'classnames';
import { LinkProps, NavLink } from 'react-router-dom';
import cls from './appLinks.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
}
export const AppLink = (props: AppLinkProps) => {
  const { className, children, to, activeClassName, ...otherProps } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classes(cls.app_link, className ?? '', { [activeClassName || cls.active]: isActive })
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};
