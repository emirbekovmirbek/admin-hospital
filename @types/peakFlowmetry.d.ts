interface TypeResPeakFlowmetry {
  data: PeakFlowmetry[];
  maxValue: number;
  message: string;
  status: string;
}
interface PeakFlowmetry {
  id: number;
  userId: number;
  performerId: number | null;
  procedureId: number | null;
  value: number | null;
  dateTime: string | null;
  symptom: Symptom | null;
  status: WellBeingStatus | null;
  comment: string | null;
  updatedAt: string | null;
}
interface PeakFlowmetryParams {
  from?: string;
  to?: string;
  patientId: string;
}
type DayAndNight = 'day' | 'night';
type ZoneName = 'red' | 'green' | 'yellow';

type Symptom = 'COUGH' | 'WHEEZING' | 'BREATHING_DIFFICULTY';
type WellBeingStatus = 'BAD' | 'OKAY' | 'GOOD';
