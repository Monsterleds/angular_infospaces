import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

interface ResponseUserSession {
  token: string;
  user: {
    id: string;
    email: string;
    password: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  constructor(private httpClient: HttpClient) {}

  signIn({ email, password }): Observable<ResponseUserSession> {
    return this.httpClient.post<ResponseUserSession>('http://localhost:3000/user/session', {
      email,
      password
    });
  }
}
