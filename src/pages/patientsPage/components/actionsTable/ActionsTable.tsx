import cls from './actionsTable.module.scss';
import Icon from 'components/icon/Icon.tsx';
import { IconsPath } from 'components/icon/iconSchema.ts';
import { Dropdown } from 'components/dropdown/Dropdown.tsx';
import { Link } from 'react-router-dom';
import { routePath } from 'utils/routesHelpers.ts';

interface ActionsTableProps {
  id: string;
}
export const ActionsTable = ({ id }: ActionsTableProps) => {
  return (
    <div className={cls.actions}>
      <Icon pathIcon={IconsPath.MESSAGE_ICON} />
      <Dropdown
        buttonText={<Icon pathIcon={IconsPath.DOTS_ICON} />}
        widthDropdown={'224px'}
        direction="bottom_left"
      >
        <ul className={cls.list}>
          <li>
            <Link to={routePath.patient.replace(':id', id)}>Открыть карту пациента</Link>
          </li>
          {/*<li>Назначить встречу</li>*/}
        </ul>
      </Dropdown>
    </div>
  );
};
