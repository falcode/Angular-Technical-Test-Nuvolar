import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitUsersService {
  private searchUserGitHub = 'https://api.github.com/search/users';
  private query = '?q=';
  constructor(private http: HttpClient) { }

  getGitData = (url: string): Observable<any> =>
    this.http.get<any>(url)

  getUsersByName = (id: string): Observable<any> =>
    this.http.get<any>(this.searchUserGitHub + this.query + id)
}
