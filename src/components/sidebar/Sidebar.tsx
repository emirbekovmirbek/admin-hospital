import cls from './sidebar.module.scss';
import classes from 'classnames';
import { AppLink } from 'components/appLink/AppLink.tsx';
import { routePath } from 'utils/routesHelpers.ts';
import Icon from 'components/icon/Icon.tsx';
import { IconsPath } from 'components/icon/iconSchema.ts';

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={classes(cls.sidebar, className ?? '')}>
      <div>
        <AppLink to={routePath.patients} className={cls.link} activeClassName={cls.active}>
          <Icon pathIcon={IconsPath.PATIENT_ICON} />
          <span>Пациенты</span>
        </AppLink>
        <AppLink to={routePath.messages} className={cls.link} activeClassName={cls.active}>
          <Icon pathIcon={IconsPath.CONNECT_ICON} />
          <span>Сообщения</span>
        </AppLink>
        <AppLink to={routePath.treatment} className={cls.link} activeClassName={cls.active}>
          <Icon pathIcon={IconsPath.MEDICAL_ICON} />
          <span>Лечение</span>
        </AppLink>
      </div>
      {/*<AppLink to={routePath.setting} className={classes(cls.link, cls.last)} activeClassName={cls.active}>*/}
      {/*  <Icon pathIcon={IconsPath.SETTING_ICON} />*/}
      {/*  <span>Настройки</span>*/}
      {/*</AppLink>*/}
    </div>
  );
};
