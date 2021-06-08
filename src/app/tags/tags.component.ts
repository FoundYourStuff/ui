import { Component, OnInit } from '@angular/core';
import { Tag } from '../models/tag';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  public showTagCreate = false;
  public tags: Tag[];
  public showModal = false;
  constructor(private tagService: TagService) {
    this.tagService.getTags().subscribe(data => {
      this.tags = data;
    });
   }
  addTag(tag){
    this.tags.push(tag);
  }
  ngOnInit(): void {
  }
  printTag(): void {

  }
}
