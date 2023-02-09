export class Alumno {
    private _nombre: string;
    private _apellido: string;
    private _direccion: string;
    private _correo: string;
    private _telefonoFijo: string;
    private _telefonoCelular: string;
  
    constructor(
      nombre: string,
      apellido: string,
      direccion: string,
      correo: string,
      telefonoFijo: string,
      telefonoCelular: string
    ) {
      this._nombre = nombre;
      this._apellido = apellido;
      this._direccion = direccion;
      this._correo = correo;
      this._telefonoFijo = telefonoFijo;
      this._telefonoCelular = telefonoCelular;
    }
  
    get nombre(): string {
      return this._nombre;
    }
  
    set nombre(value: string) {
      this._nombre = value;
    }
  
    get apellido(): string {
      return this._apellido;
    }
  
    set apellido(value: string) {
      this._apellido = value;
    }
  
    get direccion(): string {
      return this._direccion;
    }
  
    set direccion(value: string) {
      this._direccion = value;
    }
  
    get correo(): string {
      return this._correo;
    }
  
    set correo(value: string) {
      this._correo = value;
    }
  
    get telefonoFijo(): string {
      return this._telefonoFijo;
    }
  
    set telefonoFijo(value: string) {
      this._telefonoFijo = value;
    }
  
    get telefonoCelular(): string {
      return this._telefonoCelular;
    }
  
    set telefonoCelular(value: string) {
      this._telefonoCelular = value;
    }
  }
  