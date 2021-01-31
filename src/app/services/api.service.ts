import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = "https://ti1y9xymjd.execute-api.us-west-2.amazonaws.com/api/";
  constructor(private http: HttpClient) { }
}
