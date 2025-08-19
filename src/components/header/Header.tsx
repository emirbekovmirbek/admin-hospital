import cls from './header.module.scss';
// import { IconsPath } from 'components/icon/iconSchema.ts';
import { Container } from 'components/container/Container.tsx';
// import { Button } from 'components/button/Button.tsx';
// import { ButtonTheme } from 'components/button/ButtonSchema.ts';
import HeaderDropdown from './components/headerDropdown/HeaderDropdown.tsx';
import { SearchPatients } from 'components/header/components/searchPatients/SearchPatients.tsx';

export const Header = () => {
  return (
    <Container>
      <header className={cls.header}>
        <SearchPatients />
        <div className={cls.right}>
          {/*<Button*/}
          {/*  className={cls.notification}*/}
          {/*  icon={IconsPath.NOTIFICATION}*/}
          {/*  theme={ButtonTheme.SECONDARY}*/}
          {/*/>*/}
          <HeaderDropdown />
        </div>
      </header>
    </Container>
  );
};
