interface TreatmentTemplatesForm {
  name: string;
  description?: string;
  createdBy: string;
  items: AppointmentInfoItem[];
}
interface TreatmentTemplates extends TreatmentTemplatesForm {
  id: string;
}

interface TreatmentTemplatesResponse {
  data: TreatmentTemplates[];
}
