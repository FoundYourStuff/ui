import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseURL = 'https://found-your-stuff-api.herokuapp.com';
  constructor(private http: HttpClient) { }
  get baseURL(): string {
    return this.apiBaseURL;
  }
}
