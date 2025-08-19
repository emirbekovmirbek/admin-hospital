export const enum AuthEndpoints {
  UPDATE_TOKEN = '/auth/refresh',
  AUTH = '/admin/auth/login',
}

export const enum TokenList {
  REFRESH_TOKEN = 'refreshToken',
  ACCESS_TOKEN = 'accessToken',
}

export const enum PatientEndpoints {
  PATIENTS = '/admin/users',
  PATIENT = '/admin/users/{uid}',
  PATIENTS_SEARCH = '/patients',
  PATIENTS_TREATMENT_APPOINTMENT = '/patients/{patientId}/treatments',
  PATIENT_CREATE_DIAGNOSES = '/admin/diagnoses',
  PATIENT_CHANGE_DIAGNOSES = '/admin/diagnoses/{diagnosisId}',
  PATIENT_PEAKFLOW = '/doctor/peakflow/history/{patientId}',
}
export const enum TreatmentTemplatesEndpoints {
  TREATMENT_TEMPLATE = '/treatment-templates',
  TREATMENT_TEMPLATE_ID = '/treatment-templates/{id}',
}
