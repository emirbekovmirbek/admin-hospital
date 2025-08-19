type Gender = 'MALE' | 'FEMALE';

interface Patient {
  userId: string;
  lastName: string;
  firstName: string;
  patronymic: string;
  inn: string;
  phone: string;
  birthDate: string;
  height: number;
  weight: number;
  gender: Gender;
  role: string;
  agreementAccepted: boolean;
  createdAt: string;
  updatedAt: string;
  diagnosisName: string | null;
  treatmentTemplateId: string | null;
  treatmentTemplateName: string | null;
  hasAllergy: boolean | null;
  diagnosisId: string | null;
}

interface PatientSearch {
  userId: string;
  lastName: string;
  firstName: string;
  patronymic: string;
  birthDate: string;
  age: number;
  diagnosis: string;
}
interface PatientSearchResponse {
  data: PatientSearch[];
}

type PatientFilter = {
  fio?: string;
  age?: number;
};

interface PatientsResponse {
  data: Patient[];
}
interface PatientResponse {
  data: Patient;
}

interface TreatmentPatientForm {
  name: string;
  notes?: string;
  startDate: string;
  endDate: string;
  templateId: string;
  patientId: string;
}

interface PatientDiagnosesForm {
  patientId: string;
  description: string;
  hasAllergy: boolean;
}
interface DiagnosesFormChange extends Omit<PatientDiagnosesForm, 'patientId'> {
  diagnosisId: string;
}
