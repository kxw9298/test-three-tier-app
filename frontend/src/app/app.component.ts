import { Component, OnInit } from '@angular/core';
import { User } from './service/user.model';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  users = [];
  displayedColumns: string[] = ['id', 'name', 'email'];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((data: User[]) => {
        console.log("get users...");
        this.users = data
      }
      );
  }
}
