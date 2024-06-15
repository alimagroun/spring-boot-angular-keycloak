import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private apiUrl = 'http://localhost:8088/api/test';

  constructor(private http: HttpClient) { }

  getMessage(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
