import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HobbitsesService {
  public url: "http://localhost:3000/users";


  constructor(private http: HttpClient) { }

  getHome(): Observable<any> {
    return this.http.get("http://localhost:3000/users");
  }
}
