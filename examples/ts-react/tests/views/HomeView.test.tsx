import * as React from 'react';

import { render } from 'tests/utils';
import HomeView from 'src/views/HomeView';

describe('views > HomeView', () => {
  it('renders as expected', () => {
    const { getByText } = render(<HomeView />);

    expect(getByText('Hello World', { exact: false })).toBeVisible();
  });
});
