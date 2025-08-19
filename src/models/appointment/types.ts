import { EntityState } from '@reduxjs/toolkit';
export interface AppointmentSchema {
  appointments: AppointmentInfoItem[];
  modalAppointment: boolean;
  modalAppointmentsEdit: boolean;
  modalAppointmentsCreate: boolean;
  appointmentId?: number;
  treatmentTemplates: EntityState<TreatmentTemplates, string>;
}
