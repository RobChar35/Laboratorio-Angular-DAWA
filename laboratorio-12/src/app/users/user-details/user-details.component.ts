import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import users from '../data-users-testing';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  constructor(private route: ActivatedRoute) {}

  user: detailUser = { id: 0, name: "John Salas" }

  ngOnInit(): void {
    this.user = users[this.route.snapshot.params["id"]]
  }
}

interface detailUser {
  id: number, 
  name: string
}
