import { Component, OnInit } from '@angular/core';
import { DataService } from 'homework/services.data';
import { User } from 'homework/user.model';


@Component({
  selector: 'app-listing-app',
  templateUrl: './listing-app.component.html',
  styleUrls: ['./listing-app.component.css']
})
export class ListingAppComponent implements OnInit {
  users: User[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.users = this.dataService.getAllUsers();
  }

  getOddUsers(): void {
    this.users = this.dataService.getOddUsers();
  }

  getEvenUsers(): void {
    this.users = this.dataService.getEvenUsers();
  }

  deleteUser(user: User): void {
    this.dataService.deleteUser(user);
  }
}
