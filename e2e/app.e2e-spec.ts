import { Feb07Page } from './app.po';

describe('feb07 App', function() {
  let page: Feb07Page;

  beforeEach(() => {
    page = new Feb07Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
