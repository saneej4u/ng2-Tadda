import { TaddaPage } from './app.po';

describe('tadda App', () => {
  let page: TaddaPage;

  beforeEach(() => {
    page = new TaddaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
