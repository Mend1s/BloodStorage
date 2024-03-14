import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ListDonor } from '../models/ListDonor';
import { Donor } from '../models/Donor';

@Injectable({
  providedIn: 'root',
})

export class BloodService {

  constructor(private _httpClient: HttpClient) { }

  url = 'https://localhost:7054/api';

  listDonors = () => this._httpClient.get<ListDonor[]>(`${this.url}/Donors`);

  insertDonor = (donor: Donor) => this._httpClient.post(`${this.url}/Donors`, donor);

}
