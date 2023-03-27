export interface Usuario {
    id?: string,
    usuario: string,
    contrasena: string,
    esAdmin: boolean,
    nombre?: string,
    direccion?: string,
    telefono?: string
    puedeEliminar?: boolean
}