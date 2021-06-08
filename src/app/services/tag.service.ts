import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../models/Tag.model';
import { ApiService } from './api.service';
import { AccountService } from './account.service';
import { User } from '../models/User.model';
@Injectable({
  providedIn: 'root'
})
export class TagService {
  tags: Tag[] = [];
  constructor( private api: ApiService) { }
  getTag(id: string): Observable<Tag>{
    return this.api.getTag(id);
  }
  addTag(tag: Tag){
    this.tags.push(tag);
  }
  getTagInfo(id: string): string{
    return 'hello';
  }
  getTags(): Observable<Tag[]> {
    return this.api.getUserTags();
  }
  editTag(tagID: string): void {

  }
  getTagUser(id: string): Observable<User> {
    return this.api.getTagUser(id);
  }
}
