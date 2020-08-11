import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private httpClient: HttpClient) {}

  createUser({ email, password }): Observable<Object> {
    return this.httpClient.post('http://localhost:3000/user', {
      email,
      password
    });
  }
}
