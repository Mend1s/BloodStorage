import { Component, OnInit, inject } from '@angular/core';
import { BloodService } from '../../services/blood.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListDonor } from '../../models/ListDonor';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [HttpClient]
})
export class HomeComponent implements OnInit {

  donors$!: Observable<ListDonor[]>;

  private _bloodService = inject(BloodService);
  teste: any;

  ngOnInit(): void {
    this.teste = this.listDonors().subscribe((data) => {
      console.log(data);
    });
  }

  listDonors(){
    return this._bloodService.listDonors();
  }
}
