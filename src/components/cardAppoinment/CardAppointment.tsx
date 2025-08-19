import { ShortInfoAppointment } from 'components/shortInfoAppointment/ShortInfoAppointment.tsx';
import CardTopTemplate from 'components/cardTopTemplate/CardTopTemplate.tsx';
import { CardTemplate } from 'components/cardTemplate/CardTemplate.tsx';
import EditAppointment from 'components/editAppointment/EditAppointment.tsx';

interface CardAppointmentProps {
  items: AppointmentInfoItem[];
  name: string;
  id: string;
}
export const CardAppointment = ({ items, name, id }: CardAppointmentProps) => {
  return (
    <CardTemplate>
      <CardTopTemplate text={name} />
      {items.map((item, idx) => (
        <ShortInfoAppointment key={item.name} {...item} idx={idx} />
      ))}
      <EditAppointment items={items} title={name} id={id} />
    </CardTemplate>
  );
};
