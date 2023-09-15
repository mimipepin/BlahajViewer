import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Blahaj } from '../models/blahaj';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "/api";

  constructor(private http: HttpClient) { }

  getRadomBlahaj(): Observable<Blahaj> {
    return this.http.get(`${this.url}/images/random`).pipe(map((blahaj: any) => new Blahaj(
      blahaj.url, blahaj.author, blahaj.description
    )));
  }
  

}
