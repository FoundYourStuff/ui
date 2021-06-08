import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tag-create-modal',
  templateUrl: './tag-create-modal.component.html',
  styleUrls: ['./tag-create-modal.component.scss']
})
export class TagCreateModalComponent implements OnInit {
  @Output() modalDone = new EventEmitter<string>();
  tagForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.modalDone.emit(this.tagForm.value);
  }
  imageSrc;
  changeListener(fileInput: any) : void {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
    
      reader.onload = ((e) => {
        console.log(e.target['result'])
        this.imageSrc = e.target['result'];
      });
    
      console.log(reader.readAsDataURL(fileInput.target.files[0]));
    }
  }
  

}
