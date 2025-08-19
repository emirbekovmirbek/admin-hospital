import { z, type ZodType } from 'zod';

export const phoneFormValidation: ZodType<Omit<LoginType, 'password'>> = z.object({
  phone: z.string().length(9, 'Обязательное поле'),
});
