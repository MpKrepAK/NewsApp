import {Component, Input} from '@angular/core';
import {SecondLevelTitlePageData} from '../interfaces/second-level-title-page-data';

@Component({
  selector: 'app-second-level-title-page-element',
  imports: [],
  templateUrl: './second-level-title-page-element.component.html',
  styleUrl: './second-level-title-page-element.component.css'
})
export class SecondLevelTitlePageElementComponent {
  @Input()
  entity! : SecondLevelTitlePageData;
}
