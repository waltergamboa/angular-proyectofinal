export class Curso {
  private _nombre: string;
  private _comision: number;
  private _inscripcionAbierta: boolean;
  private _fechaInicio: Date;
  private _fechaFin: Date;

  constructor(
    nombre: string,
    comision: number,
    inscripcionAbierta: boolean,
    fechaInicio: Date,
    fechaFin: Date
  ) {
    this._nombre = nombre;
    this._comision = comision;
    this._inscripcionAbierta = inscripcionAbierta;
    this._fechaInicio = fechaInicio;
    this._fechaFin = fechaFin;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get comision(): number {
    return this._comision;
  }

  set comision(value: number) {
    this._comision = value;
  }

  get inscripcionAbierta(): boolean {
    return this._inscripcionAbierta;
  }

  set inscripcionAbierta(value: boolean) {
    this._inscripcionAbierta = value;
  }

  get fechaInicio(): Date {
    return this._fechaInicio;
  }

  set fechaInicio(value: Date) {
    this._fechaInicio = value;
  }

  get fechaFin(): Date {
    return this._fechaFin;
  }

  set fechaFin(value: Date) {
    this._fechaFin = value;
  }
}
