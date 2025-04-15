import {AbstractPageData} from './abstract-page-data';

export interface LinkPageData extends AbstractPageData{
  href : string;
  text : string;
}
