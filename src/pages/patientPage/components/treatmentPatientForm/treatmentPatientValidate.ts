import { z, ZodType } from 'zod';

export const formAppointmentValidation: ZodType<TreatmentPatientForm> = z.object({
  startDate: z.string().min(1, 'Обязательное поле'),
  endDate: z.string().min(1, 'Обязательное поле'),
  templateId: z.string().min(1, 'Обязательное поле'),
  name: z.string().min(1, 'Обязательное поле'),
  patientId: z.string(),
});
