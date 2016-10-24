import { ObserPage } from './app.po';

describe('obser App', function() {
  let page: ObserPage;

  beforeEach(() => {
    page = new ObserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
