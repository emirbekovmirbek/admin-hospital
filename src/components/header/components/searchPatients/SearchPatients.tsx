import cls from './searchPatients.module.scss';
import { ChangeEvent, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Input } from 'components/input/Input.tsx';
import { IconsPath } from 'components/icon/iconSchema.ts';
import { CommonElementPrefixIcon } from 'components/templateForm/FormElementSchema.ts';
import { useDebounceValue } from 'hooks/useDebounceValue.ts';
import { useFetchPatientsSearchQuery } from 'models/patient/api.ts';
import { SearchCard } from 'components/header/components/searchCard/SearchCard.tsx';
import { Loader } from 'components/loader/Loader.tsx';
import { useToggle } from 'hooks/useToggle.ts';
import classes from 'classnames';
import { useClickOutside } from 'hooks/useClickOutside.ts';
import Text from 'components/text/Text.tsx';

export const SearchPatients = () => {
  const [search, setSearch] = useState('');
  const location = useLocation();

  const ref = useRef<HTMLDivElement | null>(null);
  const { isShow, handleClose, handleOpen } = useToggle();
  useClickOutside(ref, () => {}, handleClose);
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const debounceSearch = useDebounceValue(search, 600);
  const { data, isFetching } = useFetchPatientsSearchQuery(debounceSearch, {
    skip: !debounceSearch,
  });
  useEffect(() => {
    handleClose();
    setSearch('');
  }, [location.pathname]);
  return (
    <div className={cls.template} ref={ref}>
      <Input
        icon={IconsPath.SEARCH_ICON}
        prefix={CommonElementPrefixIcon.PRE}
        placeholder="Поиск пациента"
        value={search}
        onFocus={handleOpen}
        onChange={handleChangeSearch}
        secondary
      />
      <div className={classes({ [cls.hidden]: !isShow || debounceSearch === '' }, cls.search)}>
        <ul>
          {data?.data.length ? (
            data?.data.map(item => (
              <li key={item.userId}>
                <SearchCard
                  fullName={`${item.firstName} ${item.lastName} ${item.patronymic}`}
                  id={item.userId}
                  diagnosis={item.diagnosis}
                />
              </li>
            ))
          ) : (
            <li>{ !isFetching && <Text text={'Нет данных'} />}</li>
          )}
        </ul>
        <Loader isShow={isFetching} isIcon />
      </div>
    </div>
  );
};
