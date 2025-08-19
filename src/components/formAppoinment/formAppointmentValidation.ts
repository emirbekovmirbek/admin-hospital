import { z, type ZodType } from 'zod';
export const WeekDays = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
] as const;
export const formAppointmentValidation: ZodType<AppointmentInfoForm> = z.object({
  name: z.string().min(1, 'Обязательное поле'),
  dosage: z.string().min(1, 'Обязательное поле'),
  count: z.object({
    value: z.number().min(1),
    label: z.number(),
  }),
  times: z.array(z.string().min(1, 'Время не может быть пустым')),
  days: z.array(z.enum(WeekDays)).min(1, 'Выберите дни недели'),
});
