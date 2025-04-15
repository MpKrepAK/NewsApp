import {Injectable, signal} from '@angular/core';

export type Theme = 'light' | 'dark'

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {
  private readonly currentTheme = signal<Theme>('light')

  constructor() {
    this.setTheme(this.getThemeInLocalStorage())
  }
  switchTheme(){
    let theme : Theme;
    if (this.currentTheme() === 'light'){
      this.setTheme('dark');
    }
    else{
      this.setTheme('light');
    }

  }

  setTheme(theme : Theme){
    document.documentElement.setAttribute('data-theme', theme)
    this.currentTheme.set(theme);
    this.saveThemeInLocalStorage(theme);
  }

  saveThemeInLocalStorage(theme : Theme){
    localStorage.setItem('preferred-theme', theme);
  }

  getThemeInLocalStorage(){
    return localStorage.getItem('preferred-theme') as Theme ?? 'light';
  }


}
