import { z, type ZodType } from 'zod';
import { constPasswordRegex } from 'utils/contRegex.ts';

export const formAppointmentValidation: ZodType<LoginType> = z.object({
  phone: z.string().length(9, 'Обязательное поле'),
  password: z
    .string()
    .min(6, 'Обязательное поле')
    .regex(constPasswordRegex, 'Пароль должен состоят из одной заглавной буквы и спец символа'),
});
