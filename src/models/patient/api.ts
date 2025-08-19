import { rtkApi } from 'configs/api/apiQuery.ts';
import { PatientEndpoints } from 'configs/api/apiTypes.ts';
import { filtersFilledObject } from 'utils/filtersFilledObject.ts';

const apiPatient = rtkApi.injectEndpoints({
  endpoints: build => ({
    fetchPatients: build.query<ApiResponse<PatientsResponse>, null>({
      query: () => ({
        url: PatientEndpoints.PATIENTS,
        method: 'GET',
      }),
    }),
    fetchPatientById: build.query<ApiResponse<PatientResponse>, string>({
      query: id => ({
        url: PatientEndpoints.PATIENT.replace('{uid}', id),
        method: 'GET',
      }),
      providesTags: ['patient'],
    }),
    fetchPatientsSearch: build.query<ApiResponse<PatientSearchResponse>, string>({
      query: search => ({
        url: PatientEndpoints.PATIENTS_SEARCH,
        method: 'GET',
        params: {
          search,
        },
      }),
    }),
    fetchTreatmentAppointmentToPatient: build.mutation<void, TreatmentPatientForm>({
      query: ({ patientId, ...body }) => ({
        url: PatientEndpoints.PATIENTS_TREATMENT_APPOINTMENT.replace('{patientId}', patientId),
        method: 'POST',
        body,
      }),
      invalidatesTags: (_, error) => (error ? [] : ['patient']),
    }),
    postPatientDiagnoses: build.mutation<void, PatientDiagnosesForm>({
      query: body => ({
        url: PatientEndpoints.PATIENT_CREATE_DIAGNOSES,
        method: 'POST',
        body,
      }),
      invalidatesTags: (_, error) => (error ? [] : ['patient']),
    }),
    changePatientDiagnoses: build.mutation<void, DiagnosesFormChange>({
      query: ({ diagnosisId, ...body }) => ({
        url: PatientEndpoints.PATIENT_CHANGE_DIAGNOSES.replace('{diagnosisId}', diagnosisId),
        method: 'PUT',
        body,
      }),
      invalidatesTags: (_, error) => (error ? [] : ['patient']),
    }),
    fetchPeakflow: build.query<ApiResponse<TypeResPeakFlowmetry>, PeakFlowmetryParams>({
      query: ({ patientId, ...params }) => ({
        url: PatientEndpoints.PATIENT_PEAKFLOW.replace('{patientId}', patientId),
        method: 'GET',
        params: filtersFilledObject(params),
      }),
    }),
  }),
});

export const {
  useFetchPatientsQuery,
  useFetchPatientsSearchQuery,
  useFetchPatientByIdQuery,
  useFetchTreatmentAppointmentToPatientMutation,
  useChangePatientDiagnosesMutation,
  usePostPatientDiagnosesMutation,
  useFetchPeakflowQuery,
} = apiPatient;
