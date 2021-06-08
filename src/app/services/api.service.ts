import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseURL = 'https://found-your-stuff-api.herokuapp.com';
  constructor(private http: HttpClient) { }
  get baseURL(): string {
    return this.apiBaseURL;
  }
  getTag(id: string): Observable<Tag> {
    return this.http.get<Tag>(`${this.baseURL}/tags/${id}`);
  }
}
