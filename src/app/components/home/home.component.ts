import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { BloodService } from '../../services/blood.service';
import { HttpClient } from '@angular/common/http';
import { ListDonor } from '../../models/ListDonor';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { GenderPipe } from '../../pipes/gender.pipe';
import { BloodTypePipe } from '../../pipes/bloodType.pipe';
import { RhFactorPipe } from '../../pipes/rhFactor.pipe';
import { StatusDonorPipe } from '../../pipes/statusDonor.pipe';
import { MatChipsModule } from '@angular/material/chips';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogDonorComponent } from '../dialog-donor/dialog-donor.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    GenderPipe,
    BloodTypePipe,
    RhFactorPipe,
    StatusDonorPipe,
    MatChipsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [HttpClient]
})
export class HomeComponent implements OnInit {
  donors$!: ListDonor[];
  displayedColumns: string[] = ['id', 'fullName', 'gender', 'weight', 'bloodType', 'rhFactor', 'active'];
  dataSource: MatTableDataSource<ListDonor>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private _bloodService = inject(BloodService);

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.donors$);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.listDonors();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogDonorComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  listDonors() {
    this._bloodService.listDonors().subscribe((data: ListDonor[]) => {
      this.donors$ = data;
      this.dataSource = new MatTableDataSource(this.donors$);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
