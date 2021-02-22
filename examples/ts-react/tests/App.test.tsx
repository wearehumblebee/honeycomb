import * as React from 'react';

import { fireEvent, render } from 'tests/utils';
import App from 'src/App';

describe('App', () => {
  const spies: jest.SpyInstance[] = [];

  beforeEach(() => {
    spies.push(jest.spyOn(console, 'info').mockImplementation());
  });

  afterEach(() => {
    spies.forEach((spy) => spy.mockRestore());
  });

  it('renders the HomeView by default', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello World', { exact: false })).toBeVisible();
  });

  it('renders the FormView when location matches', () => {
    const { getByLabelText, getByText } = render(<App />, {
      route: '/',
    });

    fireEvent.click(getByText('form', { exact: false }));

    expect(getByLabelText(/name\?/i)).toBeVisible();
    expect(getByLabelText(/email\?/i)).toBeVisible();
    expect(getByText('Apply', { exact: false })).toBeVisible();
  });

  it('renders the NotFoundView when location does not match a route', () => {
    const { getByText } = render(<App />, {
      route: '/some-page-that-does-not-exists',
    });

    expect(getByText('Not Found', { exact: false })).toBeVisible();
  });
});
