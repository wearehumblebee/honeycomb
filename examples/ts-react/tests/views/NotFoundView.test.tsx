import * as React from 'react';

import { render } from 'tests/utils';
import NotFoundView from 'src/views/NotFoundView';

describe('views > NotFoundView', () => {
  it('renders as expected', () => {
    const { getByText } = render(<NotFoundView />);

    expect(getByText('Not Found', { exact: false })).toBeVisible();
  });
});
