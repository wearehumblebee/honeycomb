import * as React from 'react';

import { fireEvent, render } from 'tests/utils';
import AppRouter from 'src/router';

describe('App', () => {
  const spies: jest.SpyInstance[] = [];

  beforeEach(() => {
    spies.push(jest.spyOn(console, 'info').mockImplementation());
  });

  afterEach(() => {
    spies.forEach((spy) => spy.mockRestore());
  });

  it('renders the HomeView by default', () => {
    const { getByText } = render(<AppRouter />);

    expect(getByText('Hello World', { exact: false })).toBeVisible();
  });

  it('renders the FormView when location matches', () => {
    const { getByLabelText, getByText } = render(<AppRouter />, {
      route: '/',
    });

    // Navigate to FormView
    fireEvent.click(getByText('form', { exact: false }));

    expect(getByLabelText(/name\?/i)).toBeVisible();
    expect(getByLabelText(/email\?/i)).toBeVisible();
    expect(getByText('Apply', { exact: false })).toBeVisible();
  });

  it('renders the NotFoundView when location does not match a route', () => {
    const { getByText } = render(<AppRouter />, {
      route: '/some-page-that-does-not-exists',
    });

    expect(getByText('Not Found', { exact: false })).toBeVisible();
  });
});
