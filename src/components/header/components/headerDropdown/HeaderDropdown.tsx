import cls from './headerDropdown.module.scss';
import { memo } from 'react';
import { Dropdown } from 'components/dropdown/Dropdown.tsx';
import Avatar from 'components/avatar/Avatar.tsx';
import { useAppDispatch } from 'hooks/useAppDispatch.ts';
import { logout } from 'models/user/slice.ts';
import { decodeJwt } from 'utils/decodeJwt.ts';

const HeaderDropdown = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const { patronymic, firstName, lastName } = decodeJwt();
  return (
    <Dropdown
      buttonText={
        <>
          <p>{`${lastName} ${firstName} ${patronymic}`}</p>
          <Avatar
            width={'40px'}
            height={'40px'}
            fullName={`${lastName} ${firstName} ${patronymic}`}
            type={'square'}
            border={'10px'}
            link=""
          />
        </>
      }
    >
      <ul className={cls.list}>
        <li onClick={handleLogout}>Выйти из профиля</li>
      </ul>
    </Dropdown>
  );
};

export default memo(HeaderDropdown);
