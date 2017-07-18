import { IronNutritionPage } from './app.po';

describe('iron-nutrition App', function() {
  let page: IronNutritionPage;

  beforeEach(() => {
    page = new IronNutritionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
