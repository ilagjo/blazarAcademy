import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post, User } from "./models";
import { map } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getPosts() {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostsByUserId(id: number) {
    return this.getPosts().pipe(
      map((posts) => posts.filter(post => post.userId === id))
    )
  }
}