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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  camera(){
    this.showCamera = true;
  }
  completeScan(event) {
    let tag = this.getTagFromURL(event);
    (tag !== "" && tag !== null)? this.userID = tag: confirm("HEY BAD QR CODE");
    this.showCamera = false;
  }
  getTagFromURL(url: string) : string {
    try{
      let tagURL = new URL(url);
      return (tagURL.hostname === document.location.hostname)? tagURL.searchParams.get("id"): "";
    } 
    catch {
      return "";
    }
  }
}
