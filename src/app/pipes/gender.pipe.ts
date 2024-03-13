import { Pipe, type PipeTransform } from '@angular/core';
import { GenderEnum } from '../enums/genderEnum';

@Pipe({
  name: 'gender',
  standalone: true,
})
export class GenderPipe implements PipeTransform {

  transform(value: GenderEnum): string {
    return value === GenderEnum.Masculino ? 'Masculino' : 'Feminino';
  }
}
