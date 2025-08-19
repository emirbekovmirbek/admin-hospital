import cls from './topPatientPage.module.scss';
import Text from 'components/text/Text.tsx';
import { Button } from 'components/button/Button.tsx';
import { setModalPatientTreatment } from 'models/patient/slice.ts';
import { useAppDispatch } from 'hooks/useAppDispatch.ts';
// import { routePath } from 'utils/routesHelpers.ts';

interface TopPatientPageProps {
  idTreatment?: string | null;
}
export const TopPatientPage = ({ idTreatment }: TopPatientPageProps) => {
  const dispatch = useAppDispatch();
  const handleOpenTreatmentAppointment = () => {
    dispatch(setModalPatientTreatment(true));
  };
  return (
    <div className={cls.header}>
      <Text title="Медкарта" TitleTag="h1" titleFont={'title-1'} />
      <div>
        {/*<Button*/}
        {/*  theme={ButtonTheme.SECONDARY}*/}
        {/*  text={'История болезни'}*/}
        {/*  width={'fit-content'}*/}
        {/*/>*/}
        {/*<Button as={'a'} to={routePath.messages} text={'Открыть чат'} width={'fit-content'} />*/}
        <Button
          text={idTreatment ? 'Изменить назначение' : 'Назначить лечение'}
          width={'fit-content'}
          small
          onClick={handleOpenTreatmentAppointment}
        />
      </div>
    </div>
  );
};
