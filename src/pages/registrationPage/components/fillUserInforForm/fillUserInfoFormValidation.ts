import { z, type ZodType } from 'zod';
import {constPasswordRegex} from 'utils/contRegex.ts';

export const fillUserInfoFormValidation: ZodType<FillUserInfoForm> = z.object({
  patronymic: z.string().optional(),
  surname: z.string().min(1, 'Обязательное поле'),
  name: z.string().min(1, 'Обязательное поле'),
  birthday: z.string(),
  gender: z.enum(['MALE', 'FEMALE']),
  password: z.string().min(6, 'Обязательное поле')
    .regex(constPasswordRegex, 'Пароль должен состоят из одной заглавной буквы и спец символа'),
  repeatPassword: z.string().min(6, 'Обязательное поле')
    .regex(constPasswordRegex, 'Пароль должен состоят из одной заглавной буквы и спец символа'),
  agreement: z.literal(true).refine((val) => val, {
    message: 'Вы должны согласиться',
  }),
}).refine((data) => data.password === data.repeatPassword, {
  path: ['repeatPassword'],
  message: 'Пароли не совпадают',
});
