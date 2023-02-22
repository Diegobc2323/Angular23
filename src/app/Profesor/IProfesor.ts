export interface IProfesor {
  nombre: string;
  apellido: string;
  fingreso: string;
  titulacion: string;

}

export class Profesor implements IProfesor {

  constructor(
    public nombre: string,
    public apellido: string,
    public fingreso: string,
    public titulacion: string
  ) {}

}
