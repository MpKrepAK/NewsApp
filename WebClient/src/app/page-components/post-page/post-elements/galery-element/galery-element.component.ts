import {Component, Input, OnInit} from '@angular/core';
import {LinkPageData} from '../interfaces/link-page-data';
import {GalleryPageData} from '../interfaces/gallery-page-data';
import {GalleryComponent, GalleryItem, ImageItem} from 'ng-gallery';

@Component({
  selector: 'app-galery-element',
  imports: [
    GalleryComponent
  ],
  templateUrl: './galery-element.component.html',
  styleUrl: './galery-element.component.css'
})
export class GaleryElementComponent implements OnInit{
  @Input()
  entity! : GalleryPageData;
  images: GalleryItem[] = [];

  ngOnInit(): void {
    // this.entity.imageLinks.forEach(link=>{
    //   this.images.push(new ImageItem({ src: link, thumb: link }))
    // })
    this.entity.imageLinks.forEach(link => {
      // Convert Facebook profile URL to Graph API URL
      if (link.includes('facebook.com')) {
        const username = link.split('/')[3];
        const apiUrl = `https://graph.facebook.com/${username}/picture?type=large`;
        this.images.push(new ImageItem({ src: apiUrl, thumb: apiUrl }));
      } else {
        this.images.push(new ImageItem({ src: link, thumb: link }));
      }
    });
  }
}
