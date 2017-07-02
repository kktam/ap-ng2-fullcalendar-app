import { browser, by, element } from 'protractor';

export class ApNg2FullcalendarAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
