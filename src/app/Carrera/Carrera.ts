export interface ICarrera {
  id: number;
  titulo: string;

}
export class Carrera {
  constructor(
    public id: number,
    public titulo: string
  ) {}
}
