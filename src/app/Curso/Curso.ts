export interface Curso {
  id: number;
  curso: string;

}
export class Curso {
  constructor(
    public id: number,
    public curso: string
  ) {}
}
