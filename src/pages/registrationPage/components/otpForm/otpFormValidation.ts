import { z, type ZodType } from 'zod';

export const otpFormValidation: ZodType<OTPCodeForm> = z.object({
  digit0: z.string().length(1, 'Обязательное поле'),
  digit1: z.string().length(1, 'Обязательное поле'),
  digit2: z.string().length(1, 'Обязательное поле'),
  digit3: z.string().length(1, 'Обязательное поле')
});
