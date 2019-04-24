import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {

  constructor(private http: HttpClient) { }

  createUser(postData): Observable<any> {
    return this.http.post("http://localhost:3000/users", postData)
  }
}
