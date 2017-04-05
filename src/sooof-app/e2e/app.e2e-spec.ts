import { SooofAppPage } from './app.po';

describe('sooof-app App', () => {
  let page: SooofAppPage;

  beforeEach(() => {
    page = new SooofAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
