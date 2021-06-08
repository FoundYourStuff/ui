import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  ID = '3';
  constructor() { }
  get userID(): string {
    return this.ID;
  }
}
