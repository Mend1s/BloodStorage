import { Pipe, type PipeTransform } from '@angular/core';
import { RhFactorEnum } from '../enums/rhFactorEnum';

@Pipe({
  name: 'rhFactor',
  standalone: true,
})
export class RhFactorPipe implements PipeTransform {

  transform(value: RhFactorEnum): string {
    return value === RhFactorEnum.Positivo ? 'Positivo' : 'Negativo';
  }
}
