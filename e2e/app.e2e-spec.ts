import { AngularFirebaseBlogPage } from './app.po';

describe('angular-firebase-blog App', () => {
  let page: AngularFirebaseBlogPage;

  beforeEach(() => {
    page = new AngularFirebaseBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
