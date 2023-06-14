import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import userList from '../data-users-testing';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  constructor(private route: ActivatedRoute) { }

  users: dataUsers[] = []

  ngOnInit(): void {
    this.users = userList
  }

}

interface dataUsers {
  id: number, 
  name: string
}