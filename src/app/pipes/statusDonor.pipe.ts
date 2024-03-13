import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusDonor',
  standalone: true,
})
export class StatusDonorPipe implements PipeTransform {

  transform(value: boolean): string {
    return value === true ? 'Ativo' : 'Inativo';
  }

  transformColor(value: boolean): string {
    return value === true ? 'active-chip' : 'inactive-chip';
  }
}
