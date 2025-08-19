import cls from './notfoundPage.module.css';
import { routePath } from 'utils/routesHelpers.ts';
import Text from 'components/text/Text.tsx';
import { Button } from 'components/button/Button.tsx';

export const NotfoundPage = () => {
  return (
    <div className={cls.notfound}>
      <div className={cls.image}>
        <img src="/not-found.webp" alt="старница не найдена"/>
      </div>
      <Text titleFont="title-2" title="Упс... страница не найдена,"/>
      <Text titleFont="title-2" title="попробуйте пожалуйста позже"/>
      <Button as={'a'} width={'fit-content'} to={routePath.main} text="Выйти на главную"/>
    </div>
  );
};