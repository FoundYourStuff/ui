import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  public showTagCreate: boolean = false;
  public tags = [{name: 'hello World'}];
  public showModal = false;
  constructor() { }
  addTag(tag){
    this.tags.push(tag);
  }
  ngOnInit(): void {
  }

}
