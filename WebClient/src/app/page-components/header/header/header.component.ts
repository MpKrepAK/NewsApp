import { Component } from '@angular/core';
import {ThemeSwitcherService} from '../theme-switcher.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLight = true;

  constructor(public themeService: ThemeSwitcherService) {
    this.isLight = this.themeService.getThemeInLocalStorage() === 'light';
  }

  toggleTheme(): void {
    this.themeService.switchTheme();
    console.log("qqq");
  }
}
