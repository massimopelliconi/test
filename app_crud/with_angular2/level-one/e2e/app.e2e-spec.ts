import { LevelOnePage } from './app.po';

describe('level-one App', function() {
  let page: LevelOnePage;

  beforeEach(() => {
    page = new LevelOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
