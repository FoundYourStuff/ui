import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';
import { ApiService } from './api.service';
import { AccountService } from './account.service';
@Injectable({
  providedIn: 'root'
})
export class TagService {
  tags: Tag[] = [];
  constructor(private http: HttpClient, private api: ApiService, private account: AccountService) { }
  // getTags() : Promise<Tag[]>{
  //   return new Promise(resolve => {
  //     setTimeout(()=>{
  //       resolve(this.tags);
  //     })
  //   });
  // }
  getTag(id: string): Promise<Tag>{
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'swag',
          user_id: '123',
          active: true,
          picture: 'Aundair'
        });
      });
    });
  }
  addTag(tag: Tag){
    this.tags.push(tag);
  }
  getTagInfo(id: string): string{
    return 'hello';
  }
  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.api.baseURL}/users/${this.account.userID}/tags`);
  }
  editTag(tagID: string): void {

  }
}
