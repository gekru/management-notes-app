import { browser, by, element } from 'protractor';
import {Title} from "@angular/platform-browser";

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getNotesTableName(): Promise<string> {
    return element(by.css('app-root h1')).getText()as Promise<string>;
  }
}
