import { Pipe, type PipeTransform } from '@angular/core';
import { BloodTypeEnum } from '../enums/bloodTypeEnum';

@Pipe({
  name: 'bloodType',
  standalone: true,
})
export class BloodTypePipe implements PipeTransform {

  transform(value: BloodTypeEnum): string {
    return value === BloodTypeEnum.A ? 'A' : value === BloodTypeEnum.B ? 'B' : value === BloodTypeEnum.AB ? 'AB' : 'O';
  }

}
