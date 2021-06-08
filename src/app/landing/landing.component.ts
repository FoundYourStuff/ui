import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tag } from '../models/Tag.model';
import { User } from '../models/User.model';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public tagID = '';
  public showCamera = false;
  public popup = false;
  public userData: User;
  constructor(private router: Router, private http: HttpClient, private tagService: TagService) { }
  ngOnInit(): void {
  }
  camera(){
    this.showCamera = true;
  }
  completeScan(event) {
    const tag = this.getTagFromURL(event);
    if (tag !== '' && tag !== null){
      this.tagID = tag;
      this.getUserData(this.tagID);
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
    this.getUserData(event.path[0].value);
  }
  getUserData(id: string){
    this.tagService.getTagUser(id).subscribe(data => {this.userData = data; });
  }
}
