import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { takeUntil, debounceTime, filter, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { GitUsersService } from 'src/core/services/git-users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public results = [];
  public searchForm: FormGroup;
  private destroySubject$: Subject<void> = new Subject();
  constructor(private gitUserService: GitUsersService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });

    this.searchForm.get('search').valueChanges
    .pipe(
      takeUntil(this.destroySubject$),
      debounceTime(200),
      filter(search => search),
      distinctUntilChanged(),
      switchMap((query) => this.gitUserService.getUsersByName(query))
      ).subscribe( result =>
        this.results = (result.status === 400) ? [] : result.items
      );

  }

}
