import cls from './avatar.module.scss';
import { memo } from 'react';
import { AvatarType } from 'components/avatar/AvatarSchema.ts';
import classes from 'classnames';
import { getInitials } from 'utils/getInitials.ts';

interface AvatarProps {
  link?: string;
  width: string;
  height: string;
  fullName: string;
  type?: AvatarType;
  border?: string;
}
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const CSS_VARS = {
  width: '--avatar-width',
  height: '--avatar-height',
  borderRadius: '--avatar-rounded',
};
const bg = getRandomColor();
const Avatar = (props: AvatarProps) => {
  const { link, type = 'circle', width, border, height, fullName } = props;
  return (
    <div
      role={'img'}
      aria-label={fullName}
      className={classes(cls.avatar, cls[type])}
      style={{
        [CSS_VARS.width]: width,
        [CSS_VARS.height]: height,
        [CSS_VARS.borderRadius]: border,
        background: bg,
      }}
    >
      {link ? <img src={link} alt="Avatar" /> : <p>{getInitials(fullName)}</p>}
    </div>
  );
};

export default memo(Avatar);
