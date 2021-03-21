import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
    password: new FormControl(''),
    contact: new FormControl(''),
  });
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit():void {
    this.signupForm.value.active = true;
    console.log('Data to send', this.signupForm.value);
    this.http.post('http://found-your-stuff-api.herokuapp.com/users',this.signupForm.value).subscribe(res => {
      console.log('Response', res);
    })
  }
}
