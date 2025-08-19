export interface PatientState {
  searchPatient: string;
  filterPatients?: DeepPartial<PatientFilter>;
  modalPatientTreatment: boolean;
}
