import {Component, Input} from '@angular/core';
import {SecondLevelTitlePageData} from '../interfaces/second-level-title-page-data';
import {ThirdLevelTitlePageData} from '../interfaces/third-level-title-page-data';

@Component({
  selector: 'app-third-level-title-page-element',
  imports: [],
  templateUrl: './third-level-title-page-element.component.html',
  styleUrl: './third-level-title-page-element.component.css'
})
export class ThirdLevelTitlePageElementComponent {
  @Input()
  entity! : ThirdLevelTitlePageData;
}
