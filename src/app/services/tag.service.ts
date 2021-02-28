import { Injectable } from '@angular/core';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  tags:Tag[] = []
  constructor() { }
  getTags() : Promise<Tag[]>{
    return new Promise(resolve => {
      setTimeout(()=>{
        resolve(this.tags);
      })
    });
  }
  getTag(id: String): Promise<Tag>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve({
          name: 'swag',
          id: 123
        });
      })
    });
  }
  addTag(tag:Tag){
    this.tags.push(tag);
  }
}
