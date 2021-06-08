import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../models/Tag.model';
import { User } from '../models/User.model';
import { AccountService } from './account.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseURL = 'https://found-your-stuff-api.herokuapp.com';
  constructor(private http: HttpClient, private account: AccountService) { }
  get baseURL(): string {
    return this.apiBaseURL;
  }
  getTag(id: string): Observable<Tag> {
    return this.http.get<Tag>(`${this.baseURL}/tags/${id}`);
  }
  public getTagUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/tags/${id}/users`);
  }
  public editTag(id: string, editedTag: Tag): Observable<Tag>  {
    return this.http.patch<Tag>(`${this.baseURL}/tags/${id}`, editedTag);
  }
  public getUserTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.baseURL}/users/${this.account.userID}/tags`);
  }
  public createTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(`${this.baseURL}/tags/${this.account.userID}`, tag);
  }
}
