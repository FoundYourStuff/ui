import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public showPopup: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  popupMenu(){
    this.router.navigate(['login']);
    // this.showPopup = !this.showPopup;
  }
}
