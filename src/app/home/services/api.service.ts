import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Rockets } from '../models/rockets';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  listAllRockets(): Observable<Rockets[]> {
    return this.httpClient.get<Rockets[]>('https://api.spacexdata.com/v4/launches/');
  }

  latestRocket(): Observable<Rockets> {
    return this.httpClient.get<Rockets>('https://api.spacexdata.com/v4/launches/latest');
  }
}
