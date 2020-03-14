import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitUsersService {
  private searchUserGitHub = 'https://api.github.com/search/users';
  private query = '?q=';
  constructor(private http: HttpClient) { }

  getUsersByName = (name: string) =>
    this.http.get<any>(this.searchUserGitHub + this.query + name)
}
