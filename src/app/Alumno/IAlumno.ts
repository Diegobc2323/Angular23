export interface IAlumno {
  id: number;
  nombre: string;
  apellido: string;
  direccion: string;
  fnac: string;
  sexo: string;
  nom_padre?: string;

}

export class Alumno implements IAlumno {

  constructor(
    public id : number,
    public nombre: string,
    public apellido: string,
    public direccion: string,
    public fnac: string,
    public sexo: string,
  ) {}
}
