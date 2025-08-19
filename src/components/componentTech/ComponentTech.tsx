import cls from './componentTech.module.scss';
import { Button } from 'components/button/Button.tsx';
import { routePath } from 'utils/routesHelpers.ts';

export const ComponentTech = () => {
  return (
    <div className={cls.template}>
      <div className={cls.image}>
        <img src="/tech.webp" alt="старница не найдена"/>
      </div>
      <Button as={'a'} width={'fit-content'} to={routePath.main} text="Выйти на главную"/>
    </div>
  );
};