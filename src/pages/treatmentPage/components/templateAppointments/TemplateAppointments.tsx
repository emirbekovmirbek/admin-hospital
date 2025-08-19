import cls from './templateAppointments.module.scss';
import { useSelector } from 'react-redux';
import { CardAppointment } from 'components/cardAppoinment/CardAppointment.tsx';
import { getAllTreatmentTemplates } from 'models/appointment/selector.ts';

export const TemplateAppointments = () => {
  const allTreatments = useSelector(getAllTreatmentTemplates.selectAll);
  return (
    <div className={cls.list}>
      {allTreatments.map(item => (
        <CardAppointment items={item.items} name={item.name} key={item.id} id={item.id} />
      ))}
    </div>
  );
};
