import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



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
    MatNativeDateModule],
  templateUrl: './dialog-donor.component.html',
  styleUrl: './dialog-donor.component.scss'
})
export class DialogDonorComponent implements OnInit {

  formsNewDonor!: FormGroup;

  constructor(
    private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.newFormDonor();
  }

  newFormDonor() {
    this.formsNewDonor = this.formBuilder.group({
      fullName: [''],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      birthDate: [''],
      gender: [''],
      weigth: [''],
      bloodtype: [''],
      rhfactor: [''],
      address: ['']
    })
  }

  closeDialog() {
    // this.dialogRef.close();
  }

  saveDonor() {
    // this.dialogRef.close();
  }
}
