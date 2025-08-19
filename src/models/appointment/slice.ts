import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppointmentSchema } from 'models/appointment/types.ts';

export const treatmentTemplatesAdapter = createEntityAdapter<TreatmentTemplates, string>({
  selectId: treatment => treatment.id,
});
const initialState: AppointmentSchema = {
  appointments: [],
  modalAppointment: false,
  modalAppointmentsEdit: false,
  modalAppointmentsCreate: false,
  treatmentTemplates: treatmentTemplatesAdapter.getInitialState(),
};
const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    setAllAppointments: (state, action: PayloadAction<AppointmentInfoItem[]>) => {
      state.appointments = action.payload;
    },
    upDateAppointment: (state, action: PayloadAction<AppointmentInfoItem>) => {
      if (state.appointmentId !== undefined) {
        state.appointments[state.appointmentId] = action.payload;
        state.modalAppointment = false;
        state.appointmentId = undefined;
      }
    },
    addOneAppointment: (state, action: PayloadAction<AppointmentInfoItem>) => {
      state.appointments.push(action.payload);
      state.modalAppointment = false;
    },
    removeOneAppointment: (state, action: PayloadAction<number>) => {
      state.appointments = state.appointments.filter((_, idx) => idx !== action.payload);
    },
    removeAllAppointment: state => {
      state.appointments = [];
    },
    setAppointmentModal: (state, action: PayloadAction<boolean>) => {
      state.modalAppointment = action.payload;
      if (state.modalAppointment === false) {
        state.appointmentId = undefined;
      }
    },
    setAppointmentsCreateModal: (state, action: PayloadAction<boolean>) => {
      state.modalAppointmentsCreate = action.payload;
      if (state.modalAppointmentsCreate === true) {
        state.appointments = [];
      }
    },
    setAppointmentsEditModal: (state, action: PayloadAction<boolean>) => {
      state.modalAppointmentsEdit = action.payload;
    },
    setAppointmentId: (state, action: PayloadAction<number>) => {
      state.appointmentId = action.payload;
      state.modalAppointment = true;
    },
    setTreatmentTemplates: (state, action) => {
      treatmentTemplatesAdapter.setAll(state.treatmentTemplates, action.payload);
    },
  },
});
export const {
  setAllAppointments,
  upDateAppointment,
  addOneAppointment,
  removeOneAppointment,
  removeAllAppointment,
  setAppointmentModal,
  setAppointmentId,
  setAppointmentsEditModal,
  setAppointmentsCreateModal,
  setTreatmentTemplates,
} = appointmentSlice.actions;
export const reducerAppointment = appointmentSlice.reducer;
