import { RootState } from 'configs/store/store.ts';
import { createSelector } from '@reduxjs/toolkit';
import { treatmentTemplatesAdapter } from 'models/appointment/slice.ts';

export const getAppointments = (state: RootState) => state.appointment.appointments;
export const getAppointmentsLength = createSelector(
  getAppointments,
  appointmentsList => appointmentsList.length,
);
export const getAppointmentModal = (state: RootState) => state.appointment.modalAppointment;
export const getAppointmentsModalCreate = (state: RootState) =>
  state.appointment.modalAppointmentsCreate;
export const getAppointmentsModalEdit = (state: RootState) =>
  state.appointment.modalAppointmentsEdit;
export const getAppointmentIdx = (state: RootState) => state.appointment.appointmentId;
export const getAppointmentByIdx = createSelector(
  getAppointmentIdx,
  getAppointments,
  (idx, allAppointments) => {
    return idx !== undefined ? allAppointments[idx] : null;
  },
);

export const getAllTreatmentTemplates = treatmentTemplatesAdapter.getSelectors<RootState>(
  state => state.appointment.treatmentTemplates || treatmentTemplatesAdapter.getInitialState(),
);
export const getTreatmentTemplatesById = (id: string) =>
  createSelector(getAllTreatmentTemplates.selectEntities, entities => entities[id]);
