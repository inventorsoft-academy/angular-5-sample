import { RepetitionA4Page } from './app.po';

describe('repetition-a4 App', () => {
  let page: RepetitionA4Page;

  beforeEach(() => {
    page = new RepetitionA4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
