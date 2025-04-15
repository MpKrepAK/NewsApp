import {Component, Input} from '@angular/core';
import {SecondLevelTitlePageData} from '../interfaces/second-level-title-page-data';
import {TextPageData} from '../interfaces/text-page-data';

@Component({
  selector: 'app-text-page-element',
  imports: [],
  templateUrl: './text-page-element.component.html',
  styleUrl: './text-page-element.component.css'
})
export class TextPageElementComponent {
  @Input()
  entity! : TextPageData;
}
