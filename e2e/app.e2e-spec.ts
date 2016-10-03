import { SelfiesDevspacePage } from './app.po';

describe('selfies-devspace App', function() {
  let page: SelfiesDevspacePage;

  beforeEach(() => {
    page = new SelfiesDevspacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
