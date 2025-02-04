import { Injectable } from '@angular/core';
import { User } from './user.model';
import { users } from './users';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _users: User[] = users;

  constructor() { }

  // Összes felhasználó lekérése
  getAllUsers(): User[] {
    return this._users;
  }

  // Páratlan id-jű felhasználók
  getOddUsers(): User[] {
    return this._users.filter(user => user.id % 2 !== 0);
  }

  // Páros id-jű felhasználók
  getEvenUsers(): User[] {
    return this._users.filter(user => user.id % 2 === 0);
  }

  // Egy felhasználó "törlése" (láthatatlanná tétele)
  deleteUser(user: User): void {
    user.deletedUser = true;
  }
}
