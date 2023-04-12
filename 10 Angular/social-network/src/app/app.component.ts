import { Component, OnInit } from '@angular/core';
import { Post, User } from './api/models';
import { UserService } from './api/user.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-social-network';
  user$ = this.userService.getUsers().pipe(map((users) => users[3]));
  posts$ = this.user$.pipe(
    switchMap((user) => this.userService.getPostsByUserId(user.id))
  );

  constructor(private userService: UserService) {}
}
