import {Component, OnInit} from '@angular/core';
import {
  SecondLevelTitlePageElementComponent
} from './post-elements/second-level-title-page-element/second-level-title-page-element.component';
import {SecondLevelTitlePageData} from './post-elements/interfaces/second-level-title-page-data';
import {PageDataType} from './post-elements/interfaces/page-data-type';
import {AbstractPageData} from './post-elements/interfaces/abstract-page-data';
import {ThirdLevelTitlePageData} from './post-elements/interfaces/third-level-title-page-data';
import {NgForOf, NgSwitch, NgSwitchCase} from '@angular/common';
import {
  ThirdLevelTitlePageElementComponent
} from './post-elements/third-level-title-page-element/third-level-title-page-element.component';
import {TextPageElementComponent} from './post-elements/text-page-element/text-page-element.component';
import {TextPageData} from './post-elements/interfaces/text-page-data';
import {LinkPageData} from './post-elements/interfaces/link-page-data';
import {LinkPageElementComponent} from './post-elements/link-page-element/link-page-element.component';
import {GalleryPageData} from './post-elements/interfaces/gallery-page-data';
import {GaleryElementComponent} from './post-elements/galery-element/galery-element.component';

@Component({
  selector: 'app-post-page',
  imports: [
    SecondLevelTitlePageElementComponent,
    NgForOf,
    ThirdLevelTitlePageElementComponent,
    NgSwitch,
    NgSwitchCase,
    TextPageElementComponent,
    LinkPageElementComponent,
    GaleryElementComponent
  ],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css'
})
export class PostPageComponent implements OnInit{
  pageDataType = PageDataType;
  ngOnInit(): void {
    let stpd1: SecondLevelTitlePageData = {
      index : 2,
      type : PageDataType.SecondLevelTitle,
      title: "H2"
    }
    let ttpd1: ThirdLevelTitlePageData = {
      index : 3,
      type : PageDataType.ThirdLevelTitle,
      title: "H3"
    }
    let tpd1: TextPageData = {
      index : 4,
      type : PageDataType.Text,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse fugiat magni quia voluptatum? Consequatur eveniet officia quis! A accusamus architecto dolore enim esse eum ipsa iste, laborum nihil, pariatur quisquam reiciendis repellendus sapiente similique tempore. A corporis dolorem, nam neque non porro praesentium! Ad aut cum debitis deleniti eveniet expedita hic in iure laboriosam minus nam necessitatibus, nisi non quod veniam. Magnam, minima, repellat! Animi assumenda beatae dignissimos doloremque enim, error excepturi harum ipsam iure laudantium minus nesciunt nobis reiciendis reprehenderit ullam unde voluptatem voluptates. Assumenda culpa deserunt dignissimos magni odio, officia rem repellat unde. Eos error illum molestiae odio omnis quibusdam recusandae tempora! Aperiam aut, cupiditate, dolorem earum et facere id mollitia necessitatibus nihil nostrum odit praesentium quaerat quam quas quasi quis rem repellendus sapiente sed sequi tempore ut veritatis. Aliquam aperiam aspernatur aut autem consequatur cumque dolore doloremque eaque eius et eum facere incidunt itaque, iusto magni minima nemo nostrum nulla numquam porro praesentium quasi quibusdam similique sint sit soluta tempora tenetur veritatis vero vitae. Aspernatur commodi dolore dolorum expedita explicabo facere in ipsa iure obcaecati porro possimus rem soluta sunt suscipit, tempora. Dolores eveniet labore porro? Distinctio illum in iste minima nostrum reprehenderit sapiente sequi voluptas?"
    }
    let lpd1: LinkPageData = {
      index : 4,
      type : PageDataType.Link,
      href : "https://www.youtube.com",
      text: 'Ссылачка'
    }
    let lpd2: LinkPageData = {
      index : 4,
      type : PageDataType.Link,
      href : "https://www.youtube.com",
      text: 'Ссылачка'
    }
    let lpd3: LinkPageData = {
      index : 4,
      type : PageDataType.Link,
      href : "https://www.youtube.com",
      text: 'Ссылачка'
    }
    let gallery : GalleryPageData = {
      index : 4,
      type : PageDataType.Gallery,
      imageLinks : [
        "https://www.facebook.com/vaysyper/",
        "https://www.facebook.com/allavatars.ru/",
        "https://ru.pngtree.com/freebackground/picture-of-a-blue-bird-on-a-black-background_3124189.html",
        "https://www.pinterest.com/kamenskaas327/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/",
      ]
    }
    this.entities.push(stpd1);
    this.entities.push(ttpd1);
    this.entities.push(tpd1);
    this.entities.push(lpd1);
    this.entities.push(lpd2);
    this.entities.push(lpd3);
    this.entities.push(gallery);
    this.entities.sort((a, b) => a.index - b.index);
  }
  entities : AbstractPageData[] = [];

  getSecondLevelTitlePageData(entity: AbstractPageData): SecondLevelTitlePageData {
    return entity as SecondLevelTitlePageData;
  }

  getThirdLevelTitlePageData(entity: AbstractPageData): ThirdLevelTitlePageData {
    return entity as ThirdLevelTitlePageData;
  }
  getTextPageData(entity: AbstractPageData): TextPageData {
    return entity as TextPageData;
  }

  getLinkPageData(entity: AbstractPageData) : LinkPageData {
    return entity as LinkPageData;
  }

  getGalleryPageData(entity: AbstractPageData) : GalleryPageData {
    return entity as GalleryPageData;
  }
}
