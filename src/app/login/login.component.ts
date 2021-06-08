import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userID: new FormControl(''),
  });
  constructor(private account: AccountService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    // this.account.userID = this.loginForm.get('userID');
    
  }
}
