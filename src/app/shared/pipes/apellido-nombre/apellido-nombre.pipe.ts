import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apellidoNombre'
})
export class ApellidoNombrePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    value = `${args[0]}, ${args[1]}`;
    return value;
  }
}
