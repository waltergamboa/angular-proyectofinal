import { Profesor } from './profesor.model';

export interface Curso {
  id?: string;
  nombre: string;
  comision: string;
  inscripcionAbierta: boolean;
  fechaInicio: Date;
  fechaFin: Date;
  profesor: Profesor;
}
