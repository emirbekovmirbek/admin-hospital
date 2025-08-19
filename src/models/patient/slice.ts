import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PatientState } from './types.ts';

const initialState: PatientState = {
  searchPatient: '',
  filterPatients: undefined,
  modalPatientTreatment: false,
};
const { actions, reducer: reducerPatient } = createSlice({
  name: 'patientSlice',
  initialState,
  reducers: {
    onChangeSearchPatient: (state, action: PayloadAction<string>) => {
      state.searchPatient = action.payload;
    },
    onChangeFilterPatients: (state, action: PayloadAction<PatientFilter>) => {
      state.filterPatients = action.payload;
    },
    setModalPatientTreatment: (state, action: PayloadAction<boolean>) => {
      state.modalPatientTreatment = action.payload;
    },
  },
});
export const { onChangeSearchPatient, onChangeFilterPatients, setModalPatientTreatment } = actions;
export { reducerPatient };
