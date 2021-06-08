import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private ID = '3';
  constructor() { }
  get userID(): string {
    return this.ID;
  }
}
