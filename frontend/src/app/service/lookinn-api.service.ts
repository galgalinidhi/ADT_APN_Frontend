import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LookinnApiService {

  baseUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {}

  public getListings() {
    return this.http.get(this.baseUrl+'getListings')
  }

  public getCities(){
    return this.http.get(this.baseUrl+'cities/')
  }
}

