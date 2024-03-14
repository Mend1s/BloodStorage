import { BloodService } from './../../services/blood.service';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { State } from '../../models/State';
import { error } from 'console';

@Component({
  selector: 'app-dialog-donor',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  templateUrl: './dialog-donor.component.html',
  styleUrl: './dialog-donor.component.scss'
})
export class DialogDonorComponent implements OnInit {

  states: State[] = [
    {uf: 'AC'},
    {uf: 'AL'},
    {uf: 'AP'},
    {uf: 'AM'},
    {uf: 'BA'},
    {uf: 'CE'},
    {uf: 'DF'},
    {uf: 'ES'},
    {uf: 'GO'},
    {uf: 'MA'},
    {uf: 'MT'},
    {uf: 'MS'},
    {uf: 'MG'},
    {uf: 'PA'},
    {uf: 'PB'},
    {uf: 'PR'},
    {uf: 'PE'},
    {uf: 'PI'},
    {uf: 'RJ'},
    {uf: 'RN'},
    {uf: 'RS'},
    {uf: 'RO'},
    {uf: 'RR'},
    {uf: 'SC'},
    {uf: 'SP'},
    {uf: 'SE'},
    {uf: 'TO'}
];

  formsNewDonor!: FormGroup;
  checkedDonor!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private _bloodService: BloodService) { }


  ngOnInit(): void {
    this.newFormDonor();
  }

  newFormDonor() {
    this.formsNewDonor = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      birthDate: ['', [Validators.required]],
      gender: ['', Validators.required],
      weigth: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      bloodtype: ['', Validators.required],
      rhfactor: ['', Validators.required],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(8), Validators.maxLength(8)]],
      })
    })
  }

  closeDialog() {
    // this.dialogRef.close();
  }

  onSubmit() {
    if (this.formsNewDonor.valid) {
      this._bloodService.insertDonor(this.formsNewDonor.value).subscribe(
        response => {
          console.log('Formulário salvo com sucesso:', response);
        },
        error => {
          console.log('Erro ao salvar o formulário:', error);
        }
      )
    }
  }
}
