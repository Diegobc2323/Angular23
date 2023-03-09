export interface IProfesor {
  nombre: string;
  apellido: string;
  fingreso: string;
  carreraID: number;

}

export class Profesor implements IProfesor {

  constructor(
    public nombre: string,
    public apellido: string,
    public fingreso: string,
    public carreraID: number
  ) {}

}
