import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/core/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  checked = false;
  disabled = false;
  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  changeTheme = (event: any) => event.checked ? this.uiService.setTheme('dark-theme') : this.uiService.setTheme('');

}
