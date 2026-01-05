
export interface SyllabusUnit {
  title: string;
  hours: number;
  topics: string[];
}

export interface Evaluation {
  component: string;
  weight: string;
}

export interface CourseSyllabus {
  id: string;
  name: string;
  specialtyNumber: string;
  sumilla: string;
  competenciaGeneral: string;
  competenciasEspecificas: string[];
  unidades: SyllabusUnit[];
  metodologia: string[];
  sistemaEvaluacion: Evaluation[];
  trabajoFinal: string;
  bibliografia: string[];
  resultadoAprendizaje: string;
  duracion: string;
  creditos: number;
  certificacion: string;
}

export interface SpecialtyShort {
  title: string;
  items: string[];
  certification: string;
}

export interface ProgramData {
  id: string;
  title: string;
  subtitle: string;
  presentationText: string;
  presentationBullets: string[];
  presentationQuote: string;
  specialties: SpecialtyShort[];
  syllabi: CourseSyllabus[];
  participantProfile: string[];
  graduateProfile: string[];
  finalDiploma: string;
}
