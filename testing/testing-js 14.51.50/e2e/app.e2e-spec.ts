import { TestingJsPage } from './app.po';

describe('testing-js App', function() {
  let page: TestingJsPage;

  beforeEach(() => {
    page = new TestingJsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
