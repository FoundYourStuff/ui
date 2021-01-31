import { Injectable } from '@angular/core';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  tags:Tag[] = []
  constructor() { }
  getTags() : Tag[]{
    return this.tags;
  }
  addTag(tag:Tag){
    this.tags.push(tag);
  }
}
