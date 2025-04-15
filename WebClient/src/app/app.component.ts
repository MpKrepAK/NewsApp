import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PostPageComponent} from './page-components/post-page/post-page.component';
import {HeaderComponent} from './page-components/header/header/header.component';

@Component({
  selector: 'app-root',
  imports: [PostPageComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
