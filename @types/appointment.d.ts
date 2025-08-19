type WeekDay = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
interface AppointmentInfoItem {
  name: string;
  dosage: string;
  times: string[];
  days: WeekDay[];
}
interface AppointmentInfoForm extends Omit<AppointmentInfoItem, 'id'> {
  count: { label: number; value: number };
}
