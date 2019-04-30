import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {

  constructor(private http: HttpClient) { }

  createUser(postData): Observable<any> {
    return this.http.post("http://35.228.123.213:3000/users", postData)
  }

  createZbravatar(zbravatarData): Observable<any> {
    return this.http.post("http://35.228.123.213:3000/zbravatar", zbravatarData)
  }
}
