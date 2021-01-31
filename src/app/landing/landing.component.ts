import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public userID: string = "";
  public showCamera: boolean = false;
  public popup: boolean = false;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  camera(){
    this.showCamera = true;
  }
  completeScan(event) {
    let tag = this.getTagFromURL(event);
    if(tag !== "" && tag !== null){
      this.userID = tag;
      this.getTag();
    }
    else {
      confirm("HEY BAD QR CODE");
    }
    this.showCamera = false;
  }
  getTagFromURL(url: string) : string {
    try{
      let tagURL = new URL(url);
      return  tagURL.searchParams.get("id");
    } 
    catch {
      return "";
    }
  }
  inputEnter(event){
    console.log(event.path[0].value);
    this.getTag();
  }
  getTag(){
    this.popup = true;
  }
}
