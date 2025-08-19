import { FC, memo, SVGProps } from 'react';
import classes from 'classnames';
import ViteIcon from '@icons/react.svg?react';
import SquareIcon from '@icons/chart-square.svg?react';
import SearchIcon from '@icons/search.svg?react';
import NotificationIcon from '@icons/notification.svg?react';
import ChevronIcon from '@icons/chevron.svg?react';
import PatientIcon from '@icons/patient.svg?react';
import ConnectIcon from '@icons/connect.svg?react';
import MedicalIcon from '@icons/medical.svg?react';
import SettingIcon from '@icons/setting.svg?react';
import MessageIcon from '@icons/message.svg?react';
import DotsIcon from '@icons/dots.svg?react';
import PlusIcon from '@icons/tv-plus.svg?react';
import EyeIcon from '@icons/eye.svg?react';
import SpinnerIcon from '@icons/spinner.svg?react';
import DoneIcon from '@icons/done.svg?react';
import CloseIcon from '@icons/close.svg?react';
import PencilIcon from '@icons/pencil.svg?react';
import { IconsPath } from './iconSchema';
import cls from './icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
  pathIcon: IconsPath;
}

const Icons: Record<IconsPath, FC<SVGProps<SVGElement>>> = {
  [IconsPath.VITE_ICON]: ViteIcon,
  [IconsPath.SQUARE_ICON]: SquareIcon,
  [IconsPath.SEARCH_ICON]: SearchIcon,
  [IconsPath.NOTIFICATION]: NotificationIcon,
  [IconsPath.CHEVRON_ICON]: ChevronIcon,
  [IconsPath.PATIENT_ICON]: PatientIcon,
  [IconsPath.CONNECT_ICON]: ConnectIcon,
  [IconsPath.MEDICAL_ICON]: MedicalIcon,
  [IconsPath.SETTING_ICON]: SettingIcon,
  [IconsPath.DOTS_ICON]: DotsIcon,
  [IconsPath.MESSAGE_ICON]: MessageIcon,
  [IconsPath.PLUS_ICON]: PlusIcon,
  [IconsPath.EYE_ICON]: EyeIcon,
  [IconsPath.SPINNER_ICON]: SpinnerIcon,
  [IconsPath.DONE_ICON]: DoneIcon,
  [IconsPath.CLOSE_ICON]: CloseIcon,
  [IconsPath.PENCIL_ICON]: PencilIcon,
};
const Icon = ({ pathIcon, className, ...otherProps }: IconProps) => {
  const Icon = Icons[pathIcon];
  return <Icon className={classes(className ?? '', cls.icon)} {...otherProps} />;
};

export default memo(Icon);
