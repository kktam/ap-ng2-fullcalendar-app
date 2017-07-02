import { ApNg2FullcalendarAppPage } from './app.po';

describe('ap-ng2-fullcalendar-app App', () => {
  let page: ApNg2FullcalendarAppPage;

  beforeEach(() => {
    page = new ApNg2FullcalendarAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
