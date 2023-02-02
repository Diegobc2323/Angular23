import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alumnoTitulo'
})
export class AlumnoTituloPipe implements PipeTransform {

  transform(value: string, sexo: string): string {
    sexo=="Hombre" ? value = "Sr. " + value : value = "Sra. " + value;
    return value;
  }

}
