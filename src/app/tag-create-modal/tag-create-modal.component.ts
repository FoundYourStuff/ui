import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tag-create-modal',
  templateUrl: './tag-create-modal.component.html',
  styleUrls: ['./tag-create-modal.component.scss']
})
export class TagCreateModalComponent implements OnInit {
  @Output() modalDone = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  addTag(tag){
    this.modalDone.emit(tag)
  }
}
