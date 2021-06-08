import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public userID = '';
  public showCamera = false;
  public popup = false;
  public tagData = '';
  constructor(private router: Router, private http: HttpClient, private tagService: TagService) { }
  ngOnInit(): void {
  }
  camera(){
    this.showCamera = true;
  }
  completeScan(event) {
    const tag = this.getTagFromURL(event);
    if (tag !== '' && tag !== null){
      this.userID = tag;
      this.getTag(this.userID);
    }
    else {
      confirm('HEY BAD QR CODE');
    }
    this.showCamera = false;
  }
  getTagFromURL(url: string): string {
    try{
      const tagURL = new URL(url);
      return  tagURL.searchParams.get('id');
    }
    catch {
      return '';
    }
  }
  inputEnter(event){
    this.getTag(event.path[0].value);
  }
  getTag(id: string){
    this.tagService.getTag(id).subscribe(data => {
      console.log(data);
    }
    );
    // this.tagService.getTags().then(data => {
    //   this.tagData = data.name;
    //   this.popup = true;
    // })
    // this.tagData = 'stuff';
    // this.popup = true
  }
}
