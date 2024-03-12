import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ListDonor } from '../models/ListDonor';

@Injectable({
  providedIn: 'root',
})

export class BloodService {

  constructor(private _httpClient: HttpClient) { }

  url = 'https://localhost:7054/api';

  listDonors() {
    return this._httpClient.get<ListDonor[]>(`${this.url}/Donors`);
  }
}
