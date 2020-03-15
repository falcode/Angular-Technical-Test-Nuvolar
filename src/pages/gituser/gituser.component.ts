import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitUsersService } from 'src/core/services/git-users.service';
import { Subject, forkJoin } from 'rxjs';
import { takeUntil, tap, map, switchMap, filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-gituser',
  templateUrl: './gituser.component.html',
  styleUrls: ['./gituser.component.scss']
})
export class GituserComponent implements OnInit {
  gitUserName = '';
  gitUserImg = '';
  gitUserRepos = [];
  gitUserFollowers = [];
  existUser = true;
  loading = true;
  private destroySubject$: Subject<void> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private gitUsersService: GitUsersService) { }

  ngOnInit(): void {
    this.gitUsersService.getUsersByName(this.route.snapshot.paramMap.get('id'))
    .pipe(
      takeUntil(this.destroySubject$),
      map(result => result.items ? result.items.find(user => user.login === this.route.snapshot.paramMap.get('id')) : null),
      tap(user => this.gitUserName = user ? user.login : ''),
      tap(user => this.gitUserImg = user ? user.avatar_url : ''),

    ).subscribe( user => {
      if (user) {
        forkJoin([
          this.gitUsersService.getGitData(user.followers_url),
          this.gitUsersService.getGitData(user.repos_url)
        ]).pipe(take(1)).subscribe(([followers, repos]) => {
          this.gitUserFollowers = followers;
          this.gitUserRepos = repos;
          this.loading = false;
        });
      } else {
        this.existUser = false;
      }
      }
    );
  }

}
