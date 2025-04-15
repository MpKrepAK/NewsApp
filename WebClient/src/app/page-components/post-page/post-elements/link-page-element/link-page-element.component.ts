import {Component, Input} from '@angular/core';
import {SecondLevelTitlePageData} from '../interfaces/second-level-title-page-data';
import {LinkPageData} from '../interfaces/link-page-data';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-link-page-element',
  imports: [
  ],
  templateUrl: './link-page-element.component.html',
  styleUrl: './link-page-element.component.css'
})
export class LinkPageElementComponent {
  @Input()
  entity! : LinkPageData;
}
