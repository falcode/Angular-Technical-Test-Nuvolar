import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/core/services/ui.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit{
  title = 'Angular-Technical-Test-Nuvolar';
  otherTheme = 'candy-theme';
  private destroySubject$: Subject<void> = new Subject();

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.sharedTheme.pipe(takeUntil(this.destroySubject$))
      .subscribe(theme => this.otherTheme = theme);
  }
}
